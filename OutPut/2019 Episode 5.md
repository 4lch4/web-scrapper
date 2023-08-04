# BOFH: On a sunny day like this one, the concrete dries so much more quickly

## Our hero and the Pimply Faced Youth valiantly bring pub o' clock closer for us all

Episode 5  "I've forgotten more about computing than you'll ever know!" I snap at the PFY in response to a sarcastic remark.

"OK, then – how do we get it to go?"

"I don't know, it's one of the things I've forgotten," I admit.

Man, I hate old computers. No: I hate old computers which have some non-standard config – like most old computers.

You know, when you have to boot the company's ancient financials system (which has been sitting, OFF, for so long that it has a layer of dust littered with coffee rings and cigarette burns) so an auditor can check back to *2004* to see what price we paid for 24/6 size staples because they suspect we misattributed the costs to the wrong cost centre and if THAT'S the case then it's potentially indicative of a blasé attitude towards cost management – which could seriously affect the ongoing commercial viability of the company, etc, etc.

Obviously this is the sort of financial problem that is usually sorted out when there's a big concrete pour scheduled at a nearby building site with shockingly lax after-hours security. However, auditors are like cockroaches and there's always another one behind the fridge waiting to make themselves known.

We boot the server to find there's something up with the RAID array because the unit has been powered off so long that the standby battery has become more of a lie-down battery.

"Isn't the RAID config stored in a sector on the disk?" the PFY asks.

"Yes but it wants an address from 00 to FF."

"00 – the default."

"Bound to be!"

"Uh-oh," the PFY says, looking at the volume information.

"Indeed," I say, looking at the two failed drives in the array.

Now waaaaay back in the day, a bad drive used to mean an overnight tape recovery session – but then RAID-5 came along. Even though it had the write speed of a blind scribe with Parkinson's and prostate problems, it was reasonably reliable – until you lose two disks.

"Reboot," I say to the PFY.

>Click< >BEEEEEEEP< >SMACK< >Whirrr<

"What the hell are you doing?!" the Boss gasps, coming into the room for a staple update.

"Stiction," I say.

"ONE failed drive," the PFY says moments later when the RAID config shows. "Hot swap?"

"Going to have to be. Now all we need is a 160Gig... oh... SCSI... drive."

NGGGGGAAAARGH!

...

Two days later we have a replacement drive – the major component of the cost being the shipping – and the disk gets replaced. Our next problem is the operating system, because no one can remember what the bloody admin password was back then.

A reboot and password zero later we find the machine is part of our old domain and needs domain credentials to start the database.

A trip to the Storeroom of Doom later and we have an ancient domain controller which, after booting, complains about a missing BDC but limps along in an about-to-die manner regardless. We then find out the licence for the financials software expired in 2005, so a couple of clock resets later we're back in 2004 and resetting the domain passwords and starting the financials system. All that's left now is to find a desktop machine from the beginning of time that has the financials client installed on it...

...

"I told you we should have virtualized everything," the PFY says.

"Maybe so," I say, hefting a fancy "dual-core" desktop machine from the store onto the desk, "but hoarding pays off in the end."

...

"Is it done?" the auditor asks, entering Mission Control with the Boss.

"Probably," I say. "We have one of the original client machines, the original server and original domain controller all plugged into a cheap eight-port switch. With any luck you should be able to login with these credentials. >scribble<."

>tappity< >tap< >tap< >click>

>tap< >click<

"Well... I'll just leave you to it then?" the Boss asks, quickly bored with watching someone negotiating an aeons-old chart of accounts.

"Uh-huh," the auditor says distractedly as the Boss wanders away.

>tap< >tappity< >tap<

"Hmmm," he says a few moments later.

"Hmm?" I ask.

"Have you made any changes to this?"

"You mean apart from resetting some ancient passwords and replacing a hard drive?" the PFY asks.

"Yes. No: I mean have you changed the data?"

"I shouldn't have thought so," I chip back. "It should be in the same state as when it was switched off years ago. An orderly shutdown, most likely, and the disk replacement was like-for-like in a hot-swap RAID set, so that should have been OK too. Why?"

"It's just the data," he says. "According to this," he says, pointing at a row in a table, "back in 2004 the IT department spent almost £3,000 on staples – and the supplier name is 'The Blue Posts'."

"Oh yes!" I say. "Blue Posts office and stationery. They closed down in 2005 and the new tenants put a pub up in its place – and named it after the stationery shop."

"Really?" he says, with a just a hint of absolute disbelief.

"Yes, they even have photographs in the front bar of the old stationery shop when it was running."

"And where is this pub?" he asks.

"It's only a couple of streets away."

"I think I'll need to verify this for myself," he says – again with that hint...

"No problems, we can shoot down there tonight, it's just past that new building they're starting to put up..."



- Published on: Fri Jul 05 2019 07:30:00 GMT-0500 (Central Daylight Time)

- Written By: Simon Travaglia

- Posted to: [https://www.theregister.com/2019/07/05/bofh_2019_episode_5/](https://www.theregister.com/2019/07/05/bofh_2019_episode_5/)