# Human Centered Design @cmda-minor-web 2021
Readme will be made over here  
  
resource: https://stackoverflow.com/questions/51096633/display-elements-of-an-array-one-by-one-in-order-on-event-click    
resource: https://codeburst.io/50-shades-of-dark-mode-gray-d3e9907b1194    

## :sparkles: Exclusive design
Exclusive design is designing for the needs of a specific person. This person may have or may not have a disability to take into account. 
In making an exclusive design you take a very close look at the person you are designing for, what obstacles does this person have in using a similar design / service. Exclusive design is person specific, a lot of people may have the same disability but the way they cope with is usually unique. This does not mean that what works for this specific person doesn't work for other people, but it doesnt mean it will either. To find out, simply test it! And thats what I'm going to do in this project.

## :speaker: Assignment
In this project we got to work with 'real' person that has a 'real' disability. 
I got to work with Darice and she is deaf. The assignment was to get to know Darice and create a fitting solution for podcasts.
To create an exclusive deisgn, I had to find out how she uses podcast at this moment and how I can improve this experience.


## Darice & Podcasts
As mentioned before, Darice has lost her ability to hear sound. This means that she has experienced sound before but lost it during her lifetime. 
I was suprised that in our meetings our part of the conversation got translated by a typing tolk that transfered our audio speech into text, but Darice was able to respond to that by speaking through her mic. This made testing very smooth and she got all her feedback over to me loud and clear! 
Darice is a frontend-developer and much more than that. Because she is also an expert on accessiblity and exclusive design. She knows all about design principles and this shows in testing with prototypes. In our first meeting my suspicion was confirmed, she doens't listen to podcast but she reads the transcriptions. You might say, ofcourse she does that! But if exclusive design has thought me anything, it is that you always have to verify your thoughs because it might very well be different with this particulair person. Some other points of interest in getting to know Darice was that she has a love for the tv-show 'Friends' and has a very good sense of humor.


## :mag: Testing different solutions
After the kick-off in this project we had about an hour to create a prototype to test with. We devided our group into the people that wanted to work on the closed captions usecase and the ones choose for the podcast usecase. We did a short brainstorm of what our assumptions were and what we wanted to test. We came up with a short list and we each found a topic for a short test. Together we had about 5 small tests in our prototype. In my readme I will be focussing on my progress and sometimes pointing out some interesting testresults from other team members that had an impact on my design progress.

### Test 1: Font & Sizes
My assumption was that she read the podcasts transcriptions and that means alot of text to display.  
To make this typography as good as it could get I wanted to test her preference on font sizes, line hieght and fonts. 
I created a small test enviroment with some dummy podcast text and the possibility to adapt all the font options.  
  
The result of this test was suprising, instead of choosing the best setting possible, she liked to always be able to change these settings.
Because during the day the font could be 22px but when she was tired and for example in bed reading abit before sleeping she might as well be using a bigger font size. Also she mentioned darkmode to be a nice addition as well.

-- gif test 1


### Test 2: Simulating a podcast
For this next test I was looking for a wow-factor, because just plain text but nicely designed was still just a bunch of text and you might as well read an article or an interview. I came up with an idea to simulate a podcast with text. My idea was to show dialogs over time so you would get the podcast feeling. I created a prototype with 2 tests. The first was showing dialogs over time, I created a basic timer of 5 seconds for each dialog to appear. But using this, I got the feeling I might as well use some interaction to show the dialogs because then Darice could just show the next dialog when she finished reading the previous one and there wasn't some automatic timer involved. I also though the interaction might be a nice addition because it would be totally different from reading a article or interview.  
  
The result however was that the second test was totally not was she was looking for. It would be to much hassle to click your way through the podcast. So this part was failed, but gave me valuable information. Darice didn't want to be actively involved in the podcast.
The result for the first test however was more positive. The idea of simulating a podcast was well received and I got some good feedback about the play and pause state. She also wanted an option to skip the whole podcast simulation and to show the whole transcription in one go. Also the scrolling was not working smooth on larger text dialogs and the animations for the speaker icons were distracting in the long run.

-- gif test 2

### Test 3: Nuances
Instead of testing a better vesion of my simulated podcast I wanted to dive abit deeper in nuances. How can I show context she can't hear or read? For example silences during the podcast. Those arent usually in the transcript, but give context to the situation and Darice tolled me in an earlier meeting she wanted to see the mistakes made in speech in the transcripts. So the 'ehhssss' and the double words when someone is stuck in their talking progress. I though adding silences to the transcription would fit this though process. In this last prototype I created 4 test. The first two were variatons on how to show a short silence. The first where three animated dots, but Darice killed this one fairly quick because it reminded more on the animation when someone is typing. For the second test I created a thumble weed that rolled by to give a humoristic spin on showing a silince. This gave me a more positive result because Darice liked the concept but also let me know that I should also add the silince in as text.  
  
The third test was on a specific part of the podcast where Espen is 'suprised'. I wanted to make this design solution more personal for Darice and added a friends gif when Espen is suprised. On this gif you can see Joey from friends looking very suprised. This also resulted in positive feedback, she really did like this addition.  
  
The fourth and last test I did with Darice was about the speaker icons. I added a illustrated version of Vasilis and the idea was to let this icon talk when Vasilis was talking in the podcast. Later on I would be doing the same for Espen. This idea was very well received and if I got it to work, I was tolled it to be a great addition to the podcast. She also gave me the feedback here to combine this idea of the prototype of Stan where he let the words play on the audio file. So the background would get a color once the word had been said.   
  
-- gif test 3  
  



## Exclusive design principles in my design

### Study situation
The situation is, that Darice has lost her ability to hear audio. Simple said, she is deaf. But what does that actually mean?
Well in our meetings with Darice it has become clear that there are differences in being deaf. For example there is a big difference in loosing your ability to hear and being born without the ablity. This means for Darice that she can speak fluently but does need someone or something to translate audio into something visible. This is usually text. Also in Darice her situation she still knows how certain things sound. For example some of the team members were testing closed captions while showing the Friends tv-show. It amazed me to see how much Darice still knew about how these characters sounded on certain moments. This way she would feedback my team members that the emotion they wanted to test in a closed caption wasn't the emotion shown on that particulair screenshot.  

Darice is also a frontend-developer and an accessibility expert. This means that our design solution could be technical difficult and Darice would still be able to easily figure out how it works. It also means that she would look at contrast ratio's in our tests and give feedback on that.  
  
In my final concept I applied this principle by giving Darice the controls over how she would prefer to see the font sizes and line height. She is even able to change the font in a couple of differnt variations. I'm not sure I would have applied this feature without so less instructions to any other person than Darice becuase of her background and expertise on frontend and typography.  
  
### Ignore conventions
Exclusive design is about creating a solution for a specific person. And ignoring conventions might be really usefull in some if not most cases. But for Darice this was a lot harder to apply. Because Darice is so familiar with the conventions and prefers them even, it's going against all other exclusive design principles to just ignore the conventions here. But that didn't mean I could atleast test it, right?  
  
So normally when you cannot hear a podcast you would go looking for the transcription. I wanted something different then just a transcription. I wanted the experience close to the experience someone has while listening to a podcast. I decided to break apart the transcription into dialogs and then tested how Darice would react on dialogs showing up over time. And not to stop there, I wanted to know if she liked being actively engaged in reading this podcast. 

### Prioritise identity
Instead of designing for Darice, I was designing with Darice. Well for so far that was possible while being online. 
Designing for would mean I would make choiches based on my observations. My observations said during my tests which font, size and lineheight Darice prefered but it didnt tell me that she actually prefered to always be able to change these settings. And when she tolled me when she might adjust the fontsize in a latenight reading session she also tolled me that darkmode was a very good idea. 

So instead of coding a default font, size and lineheight, she now has the controls. The default value is the values I observed while testing ofcourse. And I also spend some time building a darkmode for her. I personally don't use darkmode on my devices and it I wouldn't have applied this feature if I wasn't designing with her but for her. Apart from that I also took a close look at contrast ratio's in my design because she mentioned it in various tests during this project. Also since she is an expert on accessibility it was the least I could do.

### Add nonsense
Adding nonsense was a though nut to crack for me. How could I add nonsense? Well Darice has a special love for the tv show Friends and I though i'd work with that. A small edition on using this design solution on a desktop, you gain nuances. One of these nuances is when Espen is suprised. Here I added some usable nonsense. I added a gif of Joey from Friends that looks very suprised. This gif gets shown on the point where Espen is beign suprised. I also added some extra visuals to add more nuances to the podcast. For example, you will see Toad (from mario) falling off the dialog box when the intro music is playing. This is a 8bit game music intro and to add some extra nonsense to it, I added Toad.   
  
Also I made a small easter egg in the font options. You can choose for serif or sans-serif. But here is also a 'make it fun' option. This options adds the Friends font to the whole application!
  
Although it was difficult to come up with some cool nonsense, It was probably the most fun part to work on. I wanted to test this in the last test and I got some really positive feedback from Darice, which got me even more enthusiastic. For example I did a rush coarse on lip sync on Youtube to add animation to the speaker icons from Vasilis and Espen. When they are talking on the podcast, you will see their avatars talk as well. This was alot of manual work, but much fun. I had created different mouths for the avatars, and based on each words sound I changed which mouth is displaying. It really gave a finishing touch to the whole idea.

## The final solution
### Adding my own touch
I wanted to stay close to the podcast simulation, but during all our tests I found that Darice prefered to see all of the podcast, instead of showing dialogs each at a time. But that didn't mean I had to drop this concept. Because of Stans test, I could very much use this test result for simulating a podcast. In this final product when you start the podcast, the audio podcast starts in the background, all words are highligted when spoken and words that have been spoken get a other highlight. This way you can see where you are in the podcast and what has been passed. You can pause the podcast as well and reset it if you like.

### Designing with Darice
During our tests it became clear what Darice found important in the design solution. This is why I created a dailog based interface where you can easily see which speaker is saying what. I also added extra information like when the intro music starts playing, this is something Darice wouldn't know if she just read a transcription. Specailly for Darice I added functionality to adjust the font and size. Also behind the scenes I added darkmode functionality for her. Not with a button but based on device settings. 

### Desiging with creteria
It was because of the creteria I took a closer look at how to add nonsense. For this I took a better look at nuances and how I could make this design solution more fun to use. During this stage I added illustrated icons of the speakers that would actually speak based on the rythm of the words. I even took a quick dive in to lip sync.

### Description
I am proud to present here my final design. I took a sample from the podcast 'Hello world' from Vasilis and used this as content. It is about 40 seconds long, and represents how a other podcasts could be made as well. After all user test with Darice, which gave me valuable insights, I came up with a simulation of a podcast with the focus on text. Using this design solution, it (hopefully) really feels like a podcast and not just another article or interview. I added some personal touches for Darice which lifts this design from early stages to final concepting.

-- gif or video end prodcut
-- link to end product


## Conclusion
Looking back at the past few weeks I never though exclusive design could bring so many great insights.
I also experienced how hard it is to make a solution fit personally for someone and to drop your assumptions.
Now and then I struggles with how big a solution I wanted to create. But thanks to the feedback sessions on the fridays I got guided to a better snapshot of a design solution than a less detailed but working for every podcast solution.

### Goals
In the transition of the first week to the second week I got the idea of creating a all in one solution for making podcasts accessible for Darice. 
How awesome would it be, if she could just drop the audio file of a podcast in my solution and it would give her back a perfectly made transcription right on the spot. There are certain API's available for transfering speech to text. These solutions are however, not free. I even contacted one of the company's to see if I could get a free trial API key to test this for my school project. But they said no. 

### Understanding the userneeds 
This is an experience I will never forget and will take in account in my future projects. I think this was a very unique experience to learn how to design for someone with a disability while being able to test and ask questions. I can only hope to be able to do this more often in the future. I can see clearly how I made assumptions and when I tested them the result was the complete opposite of what I though.

### Prototype testing reflection
What I have learned from thesting the prototypes is that sometimes I should work on faking instead of making.
In some of my tests I spend (too much) time on making it all work in code. But I also saw how valuable working prototypes are. Others in my team sometimes used programmes like XD or figma to test, and I can only say I was glad I worked mine out in code with and the posibility to interact with it.  
  
For the last test I had spend a lot less time on the prototype, but more on what I wanted to know. I experienced this was equally valuable if not more so. I got very good test results which are now added to my final product.  
  
Working in a team is also a very good way of testing. We all had our own tests, sometimes they where simular to anothers team members tests but that was okay. I learned a lot of the tests from other teammembers and even applied some in my own product. For future tests, it pays off to do it with group even if they are all on there own project.

## Project status 
* [x] Prototype 1: using font & sizes  
* [x] Test report 1 added to Wiki
* [x] Prototype 2: Simulating podcasting
* [x] Test report 2 added to Wiki
* [x] Timing functionality improvement
* [x] Adding podcast information
* [x] Fixing scrolling
* [x] add animation for speakers
* [x] Brainstorming: new experiment: What do I still want to test?
* [x] Prototype 3: 
* [x] Test report 3 added to Wiki
* [x] Adapt font & sizes
* [x] Dialog box 
* [x] text reading over time
* [x] Adding styles to text reading
* [x] Maybe make the styling pretty?
* [x] Dialogs over time?
* [x] Active dialog in view
* [x] Make speaker icons
* [x] Animate speaker icons
* [x] Add podcast information
* [x] Style the audio box (play - pauze)
* [x] Add nuances
* [x] Add silences
* [x] Finish project application
* [ ] Write a readme


Nice to have
* [ ]  API to convert audio to JSON format

## Lisence 
[MIT](https://github.com/NathanNeelis/human-centered-design-2021/blob/master/LICENSE)    


## Resources
[contains](https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/)  
[play audio](https://stackoverflow.com/questions/9419263/how-to-play-audio)  
[scroll into view](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)  
[audio trimmer](https://audiotrimmer.com/)  
[color words](https://stackoverflow.com/questions/43150490/how-to-highlight-the-transcript-of-a-audio-file)  
[podcast Vasilis](https://webmaterials.design/posts/01-hello-world/)  
[mouth shapes](https://www.freepik.com/vectors/education) Education vector created by pch.vector - www.freepik.com  
[lip sync](https://www.youtube.com/watch?v=VKDMpZzhCp0)  

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
