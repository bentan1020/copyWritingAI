const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const router = express.Router();

// configuration for openai
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let feedData = "";

const stringBuilder = (dict, str) => {
  feedData += str + " \n";
  Object.entries(dict).forEach(([key, value]) => {
    feedData += `Here are some ${key} information about our target audience: \n`;
    Object.entries(dict[key]).forEach(([secKey, secValue]) => {
      if (secValue != "") {
        feedData += `${secKey} ${key} information are ${secValue}, \n`;
      }
    });
    feedData += "\n";
  });
  console.log(feedData);
};

// endpoints
router.post("/product", async (req, res) => {
  const input = req.body;
  stringBuilder(input, "here are some traits about our target audience, as well as our product: \n"
);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: `Today, you are going to be a world-class direct responsible copywriter who specializes in writing Facebook ads. I am going to show you 3 examples of good ads. Just read them. Don't explain them to me. After you acknowledge that you have read the ads. I will give you further instructions. Ready?`},
      { role: "user", content: `WARNING: You will be shocked to learn the REAL truth about most probiotic brands below...
      Hey it's Dr. Matthew Roberson, M.D., Joel's colleague and lead medical advisor here at BioTRUST, and if you suffer from bloating, digestive discomfort, low energy, moodiness, brain fog, poor sleep, weight issues, or even dry, flaky, unhealthy looking skin, then please read below as I have some important information to share with you...
      To start, you’re probably already aware that taking a daily probiotic supplement is both extremely important and highly recommended, but you may not fully understand all the reasons why.
      Even more, there’s a big difference between truly helpful & effective probiotic supplements, and most of the stuff available online and in stores today. More on that in a moment...
      But first, it’s important to realize that your GI tract is MUCH more than just a digestion center... it’s also home to 80% of your immune system and quite literally your body’s “second brain”.
      You see, within your gut reside roughly 100 TRILLION living bacteria... that’s more than 10 times the number of cells you have in your entire body!
      Because of this, maintaining the ideal ratio of "good bacteria" (known as probiotics) to "bad bacteria" is in fact one of the most critically important steps you can take to not only protect your health, but also further along your fat loss goals.
      Unfortunately, due to lifestyle and environmental factors, the vast majority of the population is severely lacking when it comes to good probiotic bacteria, throwing their gut flora ratio completely out of whack.
      These lifestyle and environmental factors include:
      • Sugar
      • Artificial sweeteners of any kind (found in "diet" beverages and food items, chewing gum, and even toothpaste)
      • Processed foods
      • Chlorinated water
      • Pollution
      Fri, Jun 4, 2021 at 3:02 PM
      Ben Tan <ben@zonmarketing.com>
             
       • Antacids
      • Laxatives
      • Stress
      • Traveling
      • Alcoholic beverages
      • Agricultural chemicals and pesticides
      • Aging (that’s right, simply getting older can work against you)
      • Antibiotics (from medications and/or antibiotics found in meat and dairy products that we ingest).
      And plenty of other common items that we come in contact with or consume regularly.
      As a result, in today’s day and age it’s very likely that your gut flora balance is suffering, and will continue to suffer, unless you do something to proactively correct it on a daily basis.
      And the #1 way to address that imbalance? That’s right, probiotics.
      But here’s something you probably don’t not know...
      The vast majority of the probiotics contained in traditional probiotic supplements will be DEAD before they ever reach your gut.
      And of course, dead probiotics are completely worthless.
      You see, one of the greatest challenges in creating a truly effective probiotic formula is being able to actually deliver delicate probiotic cells to the gastrointestinal tract, fully intact and alive.
      Because probiotics are living bacteria, they are also extremely sensitive to even the slightest change in environmental conditions. In fact, research has shown that after one year on the shelf, in a sealed bottle at room temperature, on average, LESS THAN HALF of conventionally produced probiotics survive.
      Even more, it’s estimated that traditional probiotics get typically get killed off at a rate of up to 15% each month they’re on the shelf— refrigerated or not.
      And get this, most of the probiotics products you find on store shelves are already well over a year old—some even as much as two years old. After all, big companies produce hundreds of thousands of bottles to cut cost and then store these bottles in their warehouses long before they ever end up in your hands.
      What’s more, independent testing has found that some probiotic supplements can contain less than 50% of the amount of live probiotics on their label!
      But it gets worse.
      Due to the extreme acidic environment of the stomach, as much as 75% of the remaining live probiotic cells will be killed off before reaching the intestine. In the end, most traditional probiotic supplements may only wind up delivering a very small percentage of
      
       what their label promises alive and well to your gut.
      When it all boils down, not only are these products a complete waste of your time and money, but much more importantly they are robbing you of the critically important health benefits that are the entire reason you would invest in a probiotic product in the first place.
      Fortunately, there is a solution, and the answer lies in patented Microencapsulation TechnologyTM.
      Knowing the previously mentioned challenge, at BioTRUST we’ve developed what we feel is the most advanced probiotic formula anywhere, Pro-X10, using cutting-edge, patented Microencapsulation TechnologyTM developed by Italian researchers to solve this very problem.
      Instead of leaving fragile probiotic cells to fend for themselves, this process encases each live cell in a lipid matrix to protect them from oxygen, heat, humidity, acids, bile, and the like.
      The end result is dramatically enhanced survival of probiotic cells both on the shelf and through the digestive tract, and greatly improved delivery over traditional probiotic supplements.
      For example, a study published in the Journal of Clinical Gastroenterology revealed that this patented Microencapsulation Technology delivers up to FIVE TIMES more live probiotics to the gut compared to traditional, non-encapsulated probiotic products...
      Not only that, but with Pro-X10, we recommend 2 doses daily to further enhance delivery to your gut, where probiotics can actually do what they’re supposed to do.
      But it doesn’t stop there... Pro-X10 also strategically includes the patented and research-backed probiotic strain known as DE111®. DE111® is a unique, heat- and acid-resistant form of the potent probiotic strain Bacillus subtilis, which has been shown to work wonders when it comes to rebalancing the "good" and "bad" bacteria in your gut.
      In fact, in a recent double-blind, placebo-controlled study conducted by Dr. Gina Lebellarte at the University of Wisconsin, participants taking DE111® experienced an increase in the levels of beneficial probiotics along with a decrease in the nasty bug, E. coli, while those who did not take DE111® saw no such beneficial changes.
      Not only is DE111® unparalleled in its ability to help balance your gut flora balance, but it also supports regularity and the normal breakdown of complex carbohydrates, sugars, and fats. A recent clinical study, for example, showed a reduction in occasional constipation and/or diarrhea in healthy participants taking DE111®.
      And just when you thought Pro-X10 couldn’t get any better, at BioTRUST we made certain to go the extra mile for you and your gut health.
      
       You see, while most companies would be satisfied with the most cutting-edge microencapsulation delivery method, along with the powerhouse DE111® to support gut flora balancing, at BioTRUST we wanted to make Pro-X10 even better for you... and that’s exactly what we did through the incorporation of one of the most powerful probiotic support nutrients of all time, PreforPro®.
      PreforPro® is a revolutionary new prebiotic that has been shown to accelerate the growth of a broad spectrum of probiotics. Unlike fiber or starch-based prebiotics, PreforPro does not require large doses to be effective, and it does not cause embarrassing gas and uncomfortable bloating.
      Within HOURS of consumption, PreforPro goes to work on rebalancing the gut by attacking undesirable bacteria.
      Just how much more effective is PreforPro® than other prebiotics when it comes to the growth of beneficial gut bacteria? Let’s take a look...In a study conducted by Dr. John Deaton at Deerland Enzymes, after just 48 hours, PreforPro® provided a significant growth advantage of increased the healthy bacteria compared to another leading prebiotic.
      Now, as impressive as that is, in a human clinical study, PreforPro® was shown to significantly increase the amount of beneficial bacteria in healthy participants, while also reducing the amount of “bad” bacteria and supporting the body’s immune response.
      And as if all of that wasn’t enough, we even included a unique combination of 5 additional, extremely powerful probiotic strains you’d be hard-pressed to find in other products on the market, including:
      1. Bifidobacterium breve for peak digestive health. Levels of this healthy bacteria also decline with age, allowing certain toxin-producing “bad” bacteria to increase in number, making supplementation critically important.
      2. Bifidobacterium lactis for immune enhancement. This unique probiotic strain has been shown to provide powerful immune system support.
      3. Lactobacillus acidophilus for its remarkable ability to support the elimination of “bad” gut bacteria and it anti-bloating effects.
      4. Lactobacillus plantarum, which is recognized as one of the most effective probiotic strains for supporting healthy gut function and crowding out bad bacteria.
      5. Lactobacillus rhamnosus, an important probiotic strain that supports immune health and helps control levels of bad bacteria in the gut.
      Simply put, with research suggesting that a healthy balance of gut bacteria is so mission-critical to overall health and well-being, we truly believe that EVERYONE should be taking the right probiotic daily...
      In fact, as a medical doctor, I firmly believe that supplementing with
      
       probiotics every single day is even MORE important to your health than taking a daily multi-vitamin...
      But as we’ve clearly shown in today's article, not just any probiotic product will do, and that’s why we developed Pro-X10. Through patented microencapsulation technology, which has been shown to deliver up to FIVE TIMES more healthy bacteria to the gut when compared to traditional probiotic products where the vast majority of cells are rendered DEAD and useless before ever reaching their final destination.
      And with the strategic addition of DE111®, PreforPro® and the 5 other unique probiotic strands we just went over, there really is no comparison. Pro-X10 is easily the most advanced probiotic on the market.
      I'd also like to point out that Pro-X10 is made with naturally-derived ingredients, is gluten-free, and contains no artificial sweeteners, flavors, colors, preservatives, or stimulants... It’s really the best of the best—we’ve spared no expense...
      And truthfully, Pro-X10 couldn’t be any easier to benefit from—just take 1 capsule with breakfast and 1 capsule with dinner...
      Even more, Pro-X10 can be yours today for up to 51% off with FREE U.S. shipping.
      Plus, you'll instantly get TWO free must-read e-reports, 7 Foods That Cause Belly Bloat and 8 Foods That Erase Belly Bloat.
      Here’s exactly what to do:
      To begin experiencing the premium gut-rebalancing, health-restoring benefits of Pro-X10 for yourself, simply click on the special link below (only available via this VIP email) and select your money saving package right now while we still have available inventory:
      ==> Get ProX10 up to 51% OFF + FREE Shipping (plus 2 free bonus gifts)
      And of course, like with all BioTRUST products, you're always protected by our industry-best 60-day satisfaction guarantee, where you can get a refund of even empty bottles if for any reason you aren't satisfied. We’re incredibly confident that you will see and experience the gut-rebalancing, health-restoring and immune-boosting effects of Pro-X10 that we want to make it an absolute no brainer for you to try it right now during this special offer that is only available for a limited time to VIP subscribers like you...
      Please note, though, this is a limited-time opportunity on Pro-X10, and with nearly 2 million units sold this is a product that is in high demand from our loyal customers, so act now...
      ==> Get ProX10 up to 51% OFF + FREE Shipping (plus 2 free bonus gifts)
            
      And prepare to be surprised at what a difference this premier-quality probiotic truly makes in how you feel (and even in how you look!)
      To your ultimate health!
      Dr. Matt Roberson, M.D.
      Lead BioTRUST Medical Advisor`},
      { role: "user", content: `Great. Remember, you're acting as a world-class direct response copywriter who specializes in Facebook ads. Now write me a 300 word Facebook ad that follow a similar structure based on the information I have provided you. Make them sensational and emotionally engaging. \n${feedData}.`},
    ],
    // max_tokens: 1500,
  });

  console.log(response.data.choices[0].message.content);
  res.send(response.data.choices[0].message.content);
});

module.exports = router;