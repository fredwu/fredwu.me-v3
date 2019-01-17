---
layout: post
title: "[Rails Tip] Render views outside of Controllers or Views"
date: '2012-06-20T19:09:00+10:00'
tags:
- ruby
- rails
- tips
- render
- views
- buffer
redirect_from:
- /post/25496030861/rails-tip-render-views-outside-of-controllers-or
---
Ever wondered how you could utilise the `render` method outside the context of Rails controllers and views? If you wonder why anyone would do that. Well, imagine you are building an awesome form builder, you need to output and/or store rendered partials in the buffer. How do you do that?

For example, what if you want to do this in your view?

    <%=raw Awesome::FormBuilder.new(some_options).html %>

You could do something like this:

    module Awesome
      class FormBuilder < AbstractController::Base
        include AbstractController::Rendering
        include ActionView::Context
        include ActionView::Helpers::CaptureHelper

        # set the view paths from your engine or from your application root, i.e. Rails.root
        self.view_paths = Awesome::Engine.root.join('app/views')

        def initialize(params)
          flush_output_buffer
          @_buffer = ''
          add_to_buffer(params)
        end

        def html
          @_buffer
        end

        private

        def add_to_buffer(params)
          # some logic to add rendered content to @_buffer
        end
      end
    end

The idea is to mixin the `render` method, but also ensuring the view buffer is correctly reset with `flush_output_buffer`.

Hope that helps. :)

