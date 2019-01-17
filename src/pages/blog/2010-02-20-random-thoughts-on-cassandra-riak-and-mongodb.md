---
layout: post
title: Random Thoughts on Cassandra, Riak and MongoDB
date: '2010-02-20T21:54:00+11:00'
tags:
- Cassandra
- Riak
- MongoDB
- MySQL
- RDBMS
- NoSQL
redirect_from:
- /post/400348678/random-thoughts-on-cassandra-riak-and-mongodb
---
A few days ago I was conducting some preliminary tests and benchmarks on a couple of [NoSQL](http://en.wikipedia.org/wiki/NoSQL) solutions such as [Redis](http://code.google.com/p/redis/), [Cassandra](http://incubator.apache.org/cassandra/) and [Riak](http://riak.basho.com/).

As expected, Redis performed really really well, its speed is unmatchable by Cassandra and Riak.

However, that’s not the point.

One thing I noticed is that quite a few people don’t really get what ’[scalability](http://en.wikipedia.org/wiki/Scalability)’ actually means. In this case, Redis does not scale (yet), so comparing the raw performance (on a single machine) isn’t entirely useful.


Both Cassandra and Riak scale. They are key/value solutions designed from the ground up to support distributed computing. The primary reason I wanted to evaluate them, is for their distributed nature - adding/removing nodes without impacting the application means (near) real time, automated scalability.

Despite the fact that Cassandra is being used in high-profile sites such as [Digg](http://digg.com/), [Facebook](http://facebook.com/) and [Twitter](http://twitter.com/), it is still in its very early stage. It lacks good client library support, at least for Ruby.

Riak has better client library support for Ruby, unfortunately it did not perform well against Cassandra. On a single node, it is 3 to 5 times slower than Cassandra, and it even crashed a few times during higher concurrency tests.

Oh and by the way, for simple inserts and writes, MySQL (both MyISAM and InnoDB engines) actually performed better than Cassandra and Riak, but of course, as soon as you throw in a couple of joins, things start to look ugly.

Looks like I’ll be doing some [MongoDB](http://mongodb.org/) tests in the next few days. I’ve heard so many good things about it. The folks over at BoxedIce has a very good post on [why they chose MongoDB to replace MySQL](http://blog.boxedice.com/2009/07/25/choosing-a-non-relational-database-why-we-migrated-from-mysql-to-mongodb/).

MongoDB has limited scalability via [auto-sharding](http://www.mongodb.org/display/DOCS/Sharding+Design) which is currently in alpha. Fortunately for me, I don’t need scalability right away.

To me, there are two clear advantages of using MongoDB. One, [MongoMapper](http://github.com/jnunemaker/mongomapper) is a well thought library with good community support; two, unlike Cassandra and Riak, MongoDB supports [advanced queries](http://www.mongodb.org/display/DOCS/Advanced+Queries).

What are your thoughts? :)

