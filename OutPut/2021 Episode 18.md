# BOFH: You. Wouldn't. Put. A. Test. Machine. Into. Production. Without. Telling. Us.

## Right, Mr Beancounter?

Episode 18 A lesson I learned a long time ago was: never let a user buy a server.

It's not a hard lesson to remember because of the frequent booster-shots for the rule whenever some purchasing person decides to sidestep their purchasing restrictions by "renaming" what they're buying.

…

So we've got this crappy black-box device which does pretty much nothing but provide random 24-digit numbers (as best as I can tell) to the beancounters as some way of validating transactions and preventing fraud.

It looks like a 1RU server, sounds like a 1RU server, but is in fact a "key-validation-device" – a "device" that didn't require any IT oversight in the purchasing process.

I don't know a hell of a lot about what it does, as it simply has a network port and a power lead out the back and a single USB-C port, a power switch and a multicolour LED out the front.

I'm guessing it has some specialised USB interface for input and output but frankly I'm not overly interested.

It just appeared one day in the arms of a Beancounter, preconfigured with a static IP address on the Beancounter VLAN and instructions on a firewall pinhole it required to operate.

Anyway, back to the device.

The multicolour LED, which is normally blinking orange when it's booting and a solid green when it's up, is now showing a solid red – and the network interface is showing as down on the switch.

APPARENTLY, there's a minor panic at Beancounter Central because all sorts of transactions are being invalidated and/or cancelled a minute after they're initiated.

"But that shouldn't matter," I say, "after all, this is a test device. You know, so you can test a system to see if it's stable enough to put into production."

"Uh …"

"That's what you told me. You said it was just a test device and that you wanted to see if it would be something that might be worth implementing in the future, when you had thoroughly tested it."

"Uh …"

"I mean, no-one would put a test machine into production without telling us. That would be madness. I mean, for a start we'd recommend buying a machine with redundant power."

"And redundant drives," the PFY adds.

"We might even suggest you got one of those motherboards that lights up an LED next to a faulty RAM bank – even though that's a complete white elephant, hardware-wise."

"So it's not production?" the PFY asks.

"Uh … … no …" the Beancounter lies.

"Well that's lucky. Because if it were production … heads would probably roll," I chip in.

"Not your head though," the PFY says. "Because it's not production. Because you would have told us."

"Shouldn't we call an engineer?" he asks.

"Oh, there's no need to rush," I say, "because it's not production. Anyway, I can still hear the hard drive whirring."

"Still …" the Beancounter hesitates. "Maybe give them a ring. Maybe they're in the area. It comes with a warranty."

"Yes," I say, looking at a small sticker on the top: "A 24x7 3yearr NBD. You know what NBD means?"

"?"

"Next Business Day," I say.

"And that's just how long it takes them to answer the phone," the PFY adds.

"See, a hardware warranty has a lot of similarities to an insurance policy and if there's one thing those industries are good at, it's loopholes," he continues.

"So the clock doesn't start ticking on your support contract till they pick up the phone. And it's Friday lunchtime now, so I'm guessing they'll be picking the receiver up some time late Tuesday morning."

"If we call now," I add.

"And THEN they'll send out the dumbest engineer in the crew who's so useless that he only has two tools – a rubber mallet and a Bible – with the instruction that if the Bible doesn't work he's to hit himself with the mallet."

"Yes, but maybe we should still call …"


  Three minutes later …


"Number 85 in the queue isn't bad," the PFY says, listening in to the Beancounter's phone.

"It's only a 40-minute wait time," he says happily.

"Yes," the PFY says darkly. "That's how they get you. Forty minutes now, then two songs, a message about how important your call is and how they have an unprecedented volume of callers at the moment, then your time's extended to 60 minutes, then two more songs, a message about using their web site, then your time's extended to 85 minutes, two more songs, a message, two hours and ten minutes …"

Luckily the PFY pulled out of that particular nose dive as I'd left my Bible at home – but I do have a rubber mallet.

"So what do we do?" the Beancounter asks.

"Would you like us to take a look at it?" I ask.

"Could you?" he asks, gushing with relief.

"No. Because I'm starting to suspect it's a production machine – and I'd need to do a change control."

"IT'S NOT PRODUCTION!" he snaps back with some urgency.

"OK then – well it's a tricky one," I say. "See these? They're security torx screws. For security. I mean they don't just put security torx drivers in EVERY SINGLE COMBINATION SET YOU BUY AT A POUND SHOP. Because they're security screws. Two on the front panel and four in the top."

"Can you undo them?"

"Yeah sure," the PFY says, rolling his eyes. "That's just what they'd WANT you to do. This is a financial security device right?"

"Yes."

"So what's the bet that they're not security torx at all, but are tamper switches. You turn them and they Mission-Impossible-Self-Destruct the contents of the server to protect the security."

"I … so … what do you do?"

"You drill a small inspection hole and poke a flexible boroscope down there to take a look."

"Do you have a boroscope?"

"Sure," I respond, "and we have a drill too. How big a hole would be need in the lid for the boroscope?" I ask the PFY.

"16mm, but we don't have one."

"OK, what's the next size we do have?"

"20mm."

"That'll have to do then."


  Five minutes later …


"Honestly, who could have guessed that boron-coated drill would have gone straight through the lid, the hard drive and the bottom of the server," I ask.

"Lucky it wasn't production," the PFY says. "That would have been bad."

"Heads would have rolled," I add.

The only light at the end of that tunnel comes just as the Beancounter's about to pass out. He hears a tiny voice from the phone asking for a service contract number.

I might need that mallet after all.



- Published on: Fri Oct 08 2021 04:15:00 GMT-0500 (Central Daylight Time)

- Written By: Simon Travaglia

- Posted to: [https://www.theregister.com/2021/10/08/bofh_2021_episode_18/](https://www.theregister.com/2021/10/08/bofh_2021_episode_18/)