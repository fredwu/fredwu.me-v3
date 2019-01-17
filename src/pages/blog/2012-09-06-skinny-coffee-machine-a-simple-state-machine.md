---
layout: post
title: Skinny Coffee Machine - A Simple State Machine with Observers
date: '2012-09-06T21:47:00+10:00'
tags:
- state machine
- observer
- coffeescript
- javascript
- skinny-coffee-machine
- Endless Scroll
redirect_from:
- /post/30990819723/skinny-coffee-machine-a-simple-state-machine
---
After a few nights of working on the 2.0 rewrite of [jQuery Endless Scroll](https://github.com/fredwu/jquery-endless-scroll), I am now releasing one of the tools I built for the project: **[Skinny Coffee Machine](https://github.com/fredwu/skinny-coffee-machine)**.

Skinny Coffee Machine is a simple JavaScript state machine written in CoffeeScript.

It is fairly simple to use, with the flexibility of adding and removing observers for state transitions.

### Define State Machines

    @coffeeMachine.power = new SkinnyCoffeeMachine
      default: 'off'
      events:
        turnOn:
          off: 'on'
        turnOff:
          on: 'off'
      on:
        turnOn: (from, to) -> "#{from.toUpperCase()} to #{to.toUpperCase()}"
        turnOff: (from, to) -> "#{from.toUpperCase()} to #{to.toUpperCase()}"
      before:
        turnOff: (from, to) -> "Before switching to #{to.toUpperCase()}"
      after:
        turnOn: (from, to) -> "After switching to #{to.toUpperCase()}"
        turnOff: (from, to) -> "After switching to #{to.toUpperCase()}"

    @coffeeMachine.mode = new SkinnyCoffeeMachine
      default: 'latte'
      events:
        next:
          latte: 'cappuccino'
          cappuccino: 'espresso'
          espresso: 'lungo'
          lungo: 'latte'
        last:
          latte: 'lungo'
          lungo: 'espresso'
          espresso: 'cappuccino'
          cappuccino: 'latte'

### Switch/Change States

    @coffeeMachine.power.currentState() #=> "off"
    @coffeeMachine.power.switch('turnOn')
    @coffeeMachine.power.currentState() #=> "on"

    @coffeeMachine.mode.currentState() #=> "latte"
    @coffeeMachine.mode.change('next', 3)
    @coffeeMachine.mode.currentState() #=> "cappuccino"

### Observers

    @coffeeMachine.power.observeBefore('turnOn').start 'labelA', (from, to) => "Observer A before switching to #{to.toUpperCase()}"
    @coffeeMachine.power.observeOn( 'turnOn').start 'labelB', (from, to) => "Observer B on switching to #{to.toUpperCase()}"
    @coffeeMachine.power.observeAfter( 'turnOn').start 'labelC', (from, to) => "Observer C after switching to #{to.toUpperCase()}"

    @coffeeMachine.power.observeBefore('turnOn').stop('labelA')

Go check out the [source code](https://github.com/fredwu/skinny-coffee-machine) now! :)

