# BOFH: The evil guide to upgrading switches

## Choose your own adventure! Who will win: the Boss or the IT admins? B or B

Episode 7 It's five in the morning and the PFY's at Mission Control making a few changes.

His final task will be a firmware update for the core router – which will, if we're lucky, stop a six-monthly out-of-memory issue.

He'll have already updated the firmware of our security camera system (and the resultant downstream updates of the attached cameras' firmware) and then moved on to updating the access control system – which is a little trickier, as the update causes every door in the building to unlock for around 15 seconds before re-securing.

In the old days – well, a few years back – we'd have change-controlled this activity. But luckily change-control was one of those management fads easily stifled with a relentless campaign of punctiliously observing the change control procedures for even the tiniest change.

Even the most stalwart advocate of change control would crumble under the weight of 48 separate "Network Switch Update" change control notifications when permitting an additional VLAN for every user port on a switch.

Multiply that by 28 switches and you've got an inbox full of rubbish obscuring the needle-in-the-haystack firmware update message. 

But those days are long gone. Now we only have to change control the important changes – and "important" is a very subjective term. I mean, upgrading the firmware on the espresso machine? IMPORTANT. Flashing the BIOS on my gaming laptop? IMPORTANT. Core Switch firmware? Not even on our radar.

And speaking of not on our radar, I get a text message that the management VLAN and console port of the core switch are no longer with us …

Obviously there's no need to panic – the pre-boot self-checking of this particular vendor is renowned for being glacially slow and nitpickingly verbose. I don't expect that to come back up for another ten minutes.

Ten minutes later the PFY reports no activity on the console, even after checking the serial port settings in case the new firmware's changed the port characteristics – which vendors like to slip into firmware updates without telling anyone.

Ten more minutes later the PFY tells me he's in the server room, looking at a non-standard set of status LEDs. He sends me a photo of the LEDs – which don't represent any of the fault codes I've seen.

After another couple of minutes he sends me an email with a WARNING.TXT file in included in the firmware zip, pointing out that leap-frogging of major updates is no longer supported.

In situations like this there's always a choice.  

CHOOSE YOUR OWN ADVENTURE!

A: Go into the ROM monitor, do some low-level deleting, then perform an excruciatingly slow serial upload of the old firmware (which will fail four times out of five, with buffering issues).

OR …

B: Remove any evidence of your work and come in at 8am to "find the switch has failed!"

"It'll be a hardware fault," I tell the Boss, choosing option B like a true professional. "Happens all the time."

"The switch is almost three years old, after all."

I don't tell him that some of our switches are so old they have dust from the Big Bang in them, choosing instead to imply that three years is pretty old for a switch.

"Do we have a spare?" the Boss asks.

"Oh no! I mean, that switch was pretty expensive," I respond.

"How expensive?"

CHOOSE YOUR OWN ADVENTURE!

A: Tell him the truth: that the switch concerned only cost a couple of grand and we can probably fix it with a firmware flash in a couple of hours.

OR …

B: There's this app-connected espresso machine with multiple bean hoppers which can grind a blend specific to your personal tastes …

"I think it was about seven grand," I lie, "Option-B"-ing again.

"SEVEN THOUSAND POUNDS!" the Boss gasps.

"It's the 10-gig connectivity," I add. "And we'll have to pay a premium to jump the queue to get it delivered today."

One of the immutable rules of IT budgeting is that a critical failure opens a fatter chequebook than a beautifully presented business case …

"Well, I suppose we'll have to do it," the Boss sighs, heading off up the food chain to break the bad news while I, meanwhile, get onto my coffee supplier with the good news.

Three hours and one large "switch" delivery later, I'm enjoying my first Brazilian/Ethiopian blend of the day as the PFY reloads the switch and we get back online again.

"Is this new?" the Boss asks, spotting our new coffee machine the moment he walks through the door.

"This?" I reply. "No, had it for ages. We just never got around to plumbing it in …"

The words are barely out of my mouth when the Boss's brow wrinkles at the information on his phone in response to his scan of the QR code on the side of the machine.

"This says it was commissioned today."

"Commissioned, yes, but we've had it for ages."

"It says it's the 2022 model." 

CHOOSE YOUR OWN ADVENTURE!

A:  Admit you have misappropriated a vast stack of cash for a coffee machine.

OR …

B: Admit nothing and cover your tracks.

"2022 model? No, that's the coffee beans we ordered for the machine this morning. They're over here, on the shelf by the window …"



- Published on: Thu Apr 14 2022 05:00:00 GMT-0500 (Central Daylight Time)

- Written By: Simon Travaglia

- Posted to: [https://www.theregister.com/2022/04/14/bofh_2022_episode_7/](https://www.theregister.com/2022/04/14/bofh_2022_episode_7/)