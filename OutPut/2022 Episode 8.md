# BOFH: Something's consuming 40% of UPS capacity – and it's coming from the beancounters' office

## Under-desk heaters, two small fridges, an entire kitchenette...

Episode 8 It's completely dark in the server room and the building is dead silent.

Out the windows of Mission Control I can see, off in the distance, the warm smoky glow of a transformer fire. The building's generator is stopped and the redundant UPS units are in OVERLOAD BYPASS.

The only electric devices still operating are the few things with internal batteries – the maglocks and the occasional laptop left on a user's desk.

I've lost count of the number of arguments I've had about putting external load on the server room UPS, and despite my pleas, threats, and the odd ritual killing, it still happens.

Over the past year the emergency lighting, the fire alarms, the CEO's humidor, and the desktop machine of the Beancounters' Day Trader have all been slapped onto the protected circuits.

I know that load should have been trivial, and it was … to begin with. Slowly but surely, though, the load has crept up to the point that both UPS units were showing a projected load of 120 percent apiece – as opposed to the design load of 45 percent individually.

As the load grew, it became necessary to remove it from the monitoring system. I was getting an order of magnitude more email from it than everywhere else.

"How long will it take to get everything back up again?" the Boss asks.

"Hmmm …" I say, staring into the flames in the distance. "I'm thinking maybe an hour to put the fire out, five to 24 hours to find and deliver a new transformer, another two to six hours to pull the old transformer out, put the new one in, and connect it up. I'd round it up to two days."

"TWO DAYS!" the Boss gasps. "We can't be down for two days!"

"We're not down for two days," I say. "Most of our stuff's in the cloud. It's just the building operations that are down."

"Ah, well, that's not so bad then."

"Though when the security system batteries die it might get a bit challenging – depending on whether they fail open or locked."

"Why isn't the generator running?" the Boss asks.

"The generator is auto-started by the UPS – but the UPS switched in for about a nanosecond then went into bypass because of the high load."

"What high load?"

"Good question. We no longer know what's hooked up to our UPS."

"Can you find out?"

"We could do a partial power up then a power survey," the PFY suggests.

"How do we do that?"

"Flip off all the UPS breakers, restart the UPS – which will kick the generator on as well – then power up breakers one at a time and see what the load on each of them is."

"Is it good to turn equipment on and off like that?"

"'Good' is a fairly subjective term. 'Quick' is probably what you're looking for in this instance."

… Five minutes later …

>Clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack< >clack<

"Right, so everything is off; Now RESET THE UPS …" >click< >beep< >click< "… which will start the generator …" >hmmmmm< "… and turn on the first breaker."

>click<

"Okay 3 percent. This breaker off and the next breaker on …" >clack<  >click< "… 4 percent. Next breaker …" >clack< >click< "… 2 percent …"

…

"… And final breaker …" >clack< >click< "… 38 percent."

And so we have the main culprit. About 40 percent of both UPS units is being consumed by a couple of chunky circuits which appear to terminate in the beancounters' office. We flip both circuits back on and go upstairs to see what's running.

…

Pretty much everything.

And by everything I mean four under-desk heaters, two small fridges, the entire kitchenette – including a big fridge, microwave, dishwasher, and an under-sink hot and chilled water unit. Oh, and about 15 workstations of various sorts.

…

"Forty percent!" the Boss gasps.

"Yeah, though UPS units are pretty bad at reading actual loads," the PFY lies, "you know, because of hysteresis loops, power factor anomalies, and the Batenburg LeydenJar conjecture."

***DUMMY MODE ON***

"Of course," the Boss says. "So can we get a more accurate figure of power use to pass on to the finance people?"

"We just need a broader sample base. So we just power down the circuit and then power it up again to see if we get a different reading. Over time with several samples we'd get a far more accurate figure."

"How many samples do you think you'll need?" the Boss asks.

"Oh, not more than a couple of hundred – maybe two minutes apart."

The Boss does some quick mental arithmetic and realizes that we're talking about seven hours of his time standing around watching us flick switches.

"Can you not speed it up a little?" he suggests.

"I guess so," the PFY responds.

… Thirty-six 'samples' and about one minute later …

"See!" the PFY says. "The load is now only 28 percent!"

"And that's accurate then?" the Boss asks.

"We won't know for another … 164 samples …"

… One hundred and sixty-four 'samples' later …

"So one percent," the Boss says.

"It would appear so," the PFY says. "So maybe we should load verify the CEO's office as well …"

… 40 very high-speed 'samples' later …

"Zero percent!" the PFY gasps. "You know, I think we can turn everything back on again."

>click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click< >click<

>JANGLE!<

"What's that?!" the Boss gasps.

"That's the fire alarm coming back online," I reply. "If you're lucky it'll be the smoke from the transformer that was drawn into our fresh air fans as they powered down – but if you're not lucky it'll be all that kit we smoked out by turning it on and off 200 times."

I think it's safe to say that the Boss isn't looking all that lucky …



- Published on: Fri Apr 29 2022 03:30:00 GMT-0500 (Central Daylight Time)

- Written By: Simon Travaglia

- Posted to: [https://www.theregister.com/2022/04/29/bofh_2022_episode_8/](https://www.theregister.com/2022/04/29/bofh_2022_episode_8/)