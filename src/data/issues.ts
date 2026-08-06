// Plan Ref: PLAN.md step 10 — real, cross-verified issues (replaces the
// earlier placeholder mock data). Researched via WebSearch against the PRD's
// approved-outlet list; every issue below is cross-verified across at least
// two independent outlets before inclusion, per PRD §5-1/§5-2. `date` is the
// publish date on this site (today); each item is a real, recent (2026)
// event — the underlying event date is noted in the summary/detail text.
import type { Issue } from "@/types/issue";
import { validateIssues } from "@/lib/validate-issues";

const TODAY = "2026-08-04";

export const issues: Issue[] = [
  {
    slug: "imf-keeps-2026-global-growth-forecast-ai-offsets-war",
    category: "Macro",
    featured: true,
    title: "IMF holds 2026 global growth forecast at 3%, says AI boom offsets Iran war shock",
    summary:
      "The IMF's July 2026 World Economic Outlook update left its global growth forecast largely unchanged at 3.0% for 2026, down from 3.5% in 2024-25, saying that a boom in artificial intelligence investment has offset much of the economic drag from the war in Iran. The fund expects growth to rebound to 3.4% in 2027. The report flagged higher inflation risk tied to the conflict's effect on energy prices. The forecast is more optimistic than the World Bank's own 2026 projection of 2.5% growth, which weighted the same Middle East-driven energy shock more heavily.",
    detail: [
      "The International Monetary Fund's July 2026 World Economic Outlook update kept its global growth projection close to its April estimate, forecasting 3.0% expansion for 2026, down from an average of 3.5% over 2024-25. The fund attributed the resilience largely to continued strong investment in artificial intelligence and related infrastructure, which it said has partly counterbalanced the economic fallout from the war in Iran.",
      "The war's effect on global energy markets has been a central input to the IMF's revisions across 2026 — an earlier April update had trimmed the growth outlook and flagged higher inflation on the back of an oil-price shock tied to the conflict. The July update reiterated that risk while crediting the AI investment cycle with a larger-than-expected offsetting boost to output.",
      "The World Bank's separate 2026 outlook is notably more cautious, projecting global growth of 2.5% and warning that emerging-market and developing economies face their weakest per-capita income growth since the pandemic. The gap between the two institutions' estimates reflects differing weight given to energy-price pass-through versus the technology-investment cycle.",
      "Both institutions agree on the direction of the underlying pressures: the Middle East conflict raising energy costs and stoking inflation risk, and AI-related capital spending providing an offsetting source of demand, concentrated in a small number of large economies with significant technology sectors.",
      "The IMF projects growth to rebound to 3.4% in 2027, assuming the energy shock does not deepen further and AI-related investment continues at its current pace. Fund officials cautioned the outlook remains sensitive to how the Iran conflict evolves in the coming months.",
    ],
    keywords: [
      "IMF",
      "Global Growth",
      "World Economic Outlook",
      "Artificial Intelligence",
      "Iran War",
      "Inflation",
      "World Bank",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-08/imf-sees-ai-surge-offset-war-oil-shock-and-keeps-growth-outlook",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/08/imf-world-economy-war-ai/1bcb83be-7acd-11f1-b194-f872dd4ec5aa_story.html",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-08/imf-sees-ai-surge-offset-war-oil-shock-and-keeps-growth-outlook",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/08/imf-world-economy-war-ai/1bcb83be-7acd-11f1-b194-f872dd4ec5aa_story.html",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/article/3359890/imf-sees-world-economy-growing-just-3-year-amid-iran-war",
      },
    ],
    selectionRationale:
      "Global-institution forecast with direct policy relevance and cross-country market impact (PRD §5-1 include criteria).",
  },
  {
    slug: "fed-holds-rates-steady-three-dissent-favoring-hike",
    category: "Macro",
    title: "Fed holds rates steady for a seventh straight month as three officials dissent favoring a hike",
    summary:
      "The Federal Reserve left its benchmark rate unchanged at 3.5%-3.75% on July 29, 2026, resisting pressure from within its own ranks to raise rates to fight persistently high inflation. Three of twelve FOMC members — the presidents of the Cleveland, Dallas, and Minneapolis regional banks — dissented in favor of a quarter-point hike, the largest same-direction dissent since 2016. It was the seventh straight month the Fed held rates steady. Days later, the dissenting officials publicly warned that delaying a rate hike too long could make inflation harder to fight.",
    detail: [
      "The Federal Reserve held its benchmark interest rate steady at a range of 3.5% to 3.75% on July 29, 2026, resisting pressure from within its own ranks to raise rates in response to persistently elevated inflation. It marked the seventh consecutive month the central bank has left rates unchanged.",
      "Three of the Federal Open Market Committee's twelve voting members — the presidents of the Federal Reserve Banks of Cleveland, Dallas, and Minneapolis — dissented from the decision, favoring a quarter-point increase instead. Reporting described it as the largest same-direction dissent the committee has seen since 2016.",
      "The dissenting officials had also broken from the majority at the prior meeting in late April, under then-outgoing chair Jerome Powell. Their persistence into the current meeting, held under new Fed Chair Kevin Warsh, signaled a deepening internal debate over whether inflation risk — compounded by energy costs tied to the Iran war — now outweighs the case for holding steady.",
      "Two days after the decision, the three dissenting officials issued public remarks warning that delaying a rate increase for too long could make inflation significantly harder to bring under control later. Their comments added to market unease already stirred by the split vote.",
      "The decision came against a backdrop of rising bond yields and volatile equity markets, with commentary in the following days noting that elevated Treasury yields were seen as an early credibility test for Warsh, who took over as Fed chair in May 2026 on the strength of a dovish reputation.",
      "Economists remained divided on the Fed's likely next move: some continued to expect a rate cut later in 2026, while Fed Governor Christopher Waller said publicly that the central bank's next move was just as likely to be a hike as a cut, citing energy-driven price pressure from the Iran war.",
    ],
    keywords: [
      "Federal Reserve",
      "Interest Rates",
      "FOMC",
      "Monetary Policy",
      "Inflation",
      "Kevin Warsh",
      "Bond Market",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/29/fed-holds-interest-rates-steady-warsh-second-meeting/",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/economy/fed-holds-rates-steady-as-3-policymakers-dissent-in-favor-of-hike",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/29/fed-holds-interest-rates-steady-warsh-second-meeting/",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/economy/fed-holds-rates-steady-as-3-policymakers-dissent-in-favor-of-hike",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/united-states-canada/article/3362310/us-federal-reserve-holds-interest-rates-steady-despite-warshs-inflation-vow",
      },
    ],
    selectionRationale:
      "Major central bank policy decision with global market and currency implications (PRD §5-1 include criteria).",
  },
  {
    slug: "us-new-tariffs-dozens-economies-stopgap-duties-expire",
    category: "Macro",
    title: "US moves to impose fresh tariffs on dozens of economies as stopgap duties expire",
    summary:
      "The Trump administration is set to impose new tariffs on goods from dozens of trading partners in late July 2026, aiming to keep its tariff regime intact as temporary 10% global duties lapse. The move follows an earlier round of at least 10-12.5% duties on 60 countries over forced-labor sourcing standards, with the U.S. Trade Representative saying enforcement could eventually cover economies representing about 99% of U.S. imports. China and other major trading partners are bracing for the new measures. Separately, a coalition of U.S. states is suing over the administration's legal basis for the tariffs.",
    detail: [
      "The Trump administration is preparing to impose new tariffs on products from dozens of economies in late July 2026, a move intended to keep its broader tariff regime in place as temporary 10% global duties are set to expire. The new round follows an earlier action in which the U.S. Trade Representative's office imposed duties of at least 10-12.5% on goods from 60 countries, citing insufficient enforcement of forced-labor sourcing standards.",
      "U.S. Trade Representative Jamieson Greer indicated that the next phase of tariff enforcement could eventually cover economies accounting for roughly 99% of total U.S. imports, underscoring the scale of the administration's trade agenda well into its second year.",
      "China is described as bracing for the new U.S. tariffs, with regional commentary framing the moment as a test of whether the situation escalates into renewed trade-war conditions or settles into a more managed, if still elevated, level of trade friction between the two economies.",
      "The tariff push has drawn legal challenges: a coalition of U.S. states, along with separate groups representing small businesses, is suing the administration over what they argue is a shifting and legally questionable set of statutory justifications for the global tariff program.",
      "The renewed tariff activity follows a period of relative quiet after the U.S. Supreme Court struck down an earlier set of Trump tariffs and after the outbreak of the Iran conflict in February 2026 had shifted policy attention elsewhere. Trade analysts had expected the tariff campaign to stay dormant until after the November 2026 U.S. midterm elections, which this new round contradicts.",
    ],
    keywords: [
      "Tariffs",
      "Trade Policy",
      "US Trade Representative",
      "China",
      "Trade War",
      "USMCA",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-21/us-set-to-impose-new-duties-by-friday-with-stopgap-to-expire",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/economy/global-economy/article/3361480/china-braces-new-us-global-tariffs-loom-fresh-trade-war-or-managed-friction",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-21/us-set-to-impose-new-duties-by-friday-with-stopgap-to-expire",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/economy/global-economy/article/3361480/china-braces-new-us-global-tariffs-loom-fresh-trade-war-or-managed-friction",
      },
    ],
    selectionRationale:
      "Affects nearly all major trading partners and global trade policy broadly (PRD §5-1 include criteria).",
  },
  {
    slug: "oil-tops-100-iran-war-houthi-red-sea-attacks",
    category: "Markets",
    title: "Oil tops $100 a barrel as Iran war escalates and Houthi attacks hit Red Sea shipping",
    summary:
      "Crude oil surged past $100 a barrel in late July 2026 — its first time above that level in two months — after Iran-backed Houthi militants said they attacked two Saudi Arabian tankers in the Red Sea, opening a new front in the Middle East conflict. The attacks threatened the Red Sea detour route Saudi Arabia has used to keep oil flowing amid separate disruptions in the Strait of Hormuz. Prices eased somewhat after the U.S. and Iran briefly refrained from further strikes, but gas prices were still expected to climb further as markets priced in continued disruption. Washington signaled it does not plan to tap its strategic petroleum reserve to ease prices this time.",
    detail: [
      "Crude oil prices surged past $100 a barrel in late July 2026, marking the first time the benchmark had crossed that level in two months, after Iran-backed Houthi militants said they had attacked two Saudi Arabian oil tankers in the Red Sea. The move opened a new front in the Middle East conflict and raised fears of deeper disruption to global oil supply routes.",
      "The Red Sea has served as a critical detour for Saudi Arabian oil shipments amid separate, ongoing disruptions to traffic through the Strait of Hormuz, the primary gateway to the Persian Gulf. Targeting that detour route threatened to cut off one of the few remaining channels producers had been using to keep barrels flowing despite the wider conflict.",
      "For the month of July, U.S. crude benchmark prices rose by roughly a fifth as the conflict widened. Gas prices at the pump were expected to climb further as markets priced in the risk of prolonged disruption, adding to household costs already under pressure from broader inflation.",
      "Oil prices eased somewhat in the days that followed, after the United States and Iran refrained from launching further military strikes in the Persian Gulf for several consecutive days, offering markets some relief from the spike.",
      "Unlike in past oil-price shocks, the U.S. signaled it does not plan to tap its Strategic Petroleum Reserve to bring prices down this time, even as the Iran war entered a new phase — a shift in policy response that analysts said reflected a more cautious approach to the reserve amid an unresolved, still-escalating conflict.",
    ],
    keywords: [
      "Oil Prices",
      "Crude Oil",
      "Iran War",
      "Red Sea",
      "Strait of Hormuz",
      "Energy Markets",
      "OPEC",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-22/latest-oil-market-news-and-analysis-for-july-23",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/24/gas-prices-poised-climb-further-markets-price-iran-disruption/",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-22/latest-oil-market-news-and-analysis-for-july-23",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/26/oil-prices-crude-iran-shipping/11044586-8948-11f1-8912-d71e69d679d7_story.html",
      },
    ],
    selectionRationale:
      "Global commodity shock with direct pass-through to inflation and consumer costs worldwide (PRD §5-1 include criteria).",
  },
  {
    slug: "nasdaq-correction-fed-decision-tech-rebound",
    category: "Markets",
    title: "Nasdaq 100 falls into correction after Fed decision, then rebounds on chipmaker strength",
    summary:
      "U.S. stocks swung sharply in the final days of July 2026: the Nasdaq 100 fell into correction territory — down more than 11% from its June peak — after the Fed's July 29 rate decision came with three dissents favoring a hike, while the S&P 500 dropped 1.5% and the Dow fell 2.2% the same day. Stocks then rebounded, with the S&P 500 climbing 0.7% and the Nasdaq composite jumping 1% by July 31, as a rally in chipmakers and other technology heavyweights overshadowed lingering inflation concerns. Dip buyers emerged on bets that the AI trade still has room to run.",
    detail: [
      "U.S. equity markets swung sharply in the final days of July 2026. On Wednesday, July 29, the S&P 500 fell 1.5%, the Dow Jones Industrial Average dropped 2.2%, and the Nasdaq composite lost 1.7%, as the Federal Reserve's decision to hold interest rates steady arrived alongside three dissenting votes in favor of a rate hike — a signal markets read as raising the odds of tighter policy ahead.",
      "The Nasdaq 100 index closed in correction territory that day, down more than 11% from its June peak, as rate-sensitive technology shares bore the brunt of the selloff. The scale of the FOMC dissent, the largest same-direction split since 2016, amplified the market reaction beyond what the decision to hold rates alone might have produced.",
      "Sentiment shifted over the following two sessions. By Friday, July 31, the S&P 500 had climbed 0.7%, the Dow added 0.5%, and the Nasdaq composite jumped 1%, as strong corporate earnings — particularly from technology heavyweights — helped overshadow the inflation concerns that had been rattling the bond market.",
      "A rebound in major chipmakers played a central role in the recovery, with dip buyers emerging on speculation that the artificial-intelligence trade that has powered much of the year's bull market still had further room to run, despite the earlier correction in tech shares.",
      "The week's volatility illustrated how sensitive equity markets have become to incremental Fed signals during 2026, with a single split vote enough to tip a major index into correction territory before a rebound driven by sector-specific earnings strength reversed much of the move within days.",
    ],
    keywords: [
      "Stock Market",
      "Nasdaq",
      "S&P 500",
      "Federal Reserve",
      "Semiconductors",
      "Market Volatility",
      "AI Stocks",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-29/us-futures-tick-higher-as-semiconductor-stocks-climb-fed-looms",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/31/wall-street-stocks-dow-nasdaq/ee08da40-8d1d-11f1-8912-d71e69d679d7_story.html",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-29/us-futures-tick-higher-as-semiconductor-stocks-climb-fed-looms",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/29/wall-street-stocks-dow-nasdaq/7aafba20-8b8b-11f1-8912-d71e69d679d7_story.html",
      },
    ],
    selectionRationale:
      "Systemic, cross-index market swing tied directly to central bank policy (PRD §5-1 include criteria).",
  },
  {
    slug: "treasury-yields-19-year-high-bond-selloff",
    category: "Markets",
    title: "30-year Treasury yield hits 19-year high as inflation and fiscal worries drive bond selloff",
    summary:
      "Yields on 30-year U.S. Treasury bonds climbed to almost 5.2%-5.23% in mid-to-late 2026 — their highest level in roughly 19 years, or since 2007 — as investors sold government debt on fears of persistent inflation, aggravated by the war in Iran and concerns about U.S. fiscal deterioration. The selloff has directly raised borrowing costs for everyday Americans, including mortgage and car-loan rates. It has also drawn attention as an early credibility test for new Fed Chair Kevin Warsh, whose dovish reputation has been tested by the combination of rising yields and internal dissent favoring rate hikes.",
    detail: [
      "Yields on 30-year U.S. Treasury bonds climbed to nearly 5.2%-5.23% during 2026, reaching their highest level in almost 19 years — the highest since 2007 — as investors sold long-dated government debt amid fears of persistent inflation.",
      "The bond selloff was aggravated by the war in Iran, which has pushed up energy prices and fed broader inflation concerns, as well as by mounting worries over the U.S. government's fiscal trajectory and growing debt burden.",
      "The rise in yields has a direct, tangible effect on ordinary borrowers: as the global bond selloff drives up the price the U.S. government pays to borrow, related benchmark rates for mortgages and car loans have climbed as well, raising costs for American households.",
      "The yield spike has also become an early test of credibility for Kevin Warsh, who took over as Federal Reserve chair in May 2026 on the basis of a dovish reputation. Elevated yields despite the Fed holding rates steady have raised questions among bond investors about whether the new chair's approach to inflation is being taken seriously by markets.",
      "The situation reflects a broader dynamic seen across 2026: a resilient U.S. economy and Middle East tensions have simultaneously supported the dollar while pressuring Treasuries, a combination that has left traders navigating a market environment where currency strength and bond weakness are moving in tandem rather than offsetting one another as they more typically would.",
    ],
    keywords: [
      "Treasury Yields",
      "Bond Market",
      "Inflation",
      "Federal Reserve",
      "Kevin Warsh",
      "US Fiscal Policy",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/05/20/rising-bond-yields-mean-higher-mortgages-car-loans-americans/",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/markets/bonds/30-year-us-treasury-yield-rises-to-highest-since-2007",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/05/20/rising-bond-yields-mean-higher-mortgages-car-loans-americans/",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/markets/bonds/30-year-us-treasury-yield-rises-to-highest-since-2007",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/economy/global-economy/article/3361757/us-30-year-treasury-streak-how-will-5-yields-reshape-global-capital-flows",
      },
    ],
    selectionRationale:
      "Cross-market financial risk affecting global capital flows and borrowing costs (PRD §5-1 include criteria).",
  },
  {
    slug: "samsung-sk-hynix-520bn-chip-hub-south-korea",
    category: "Business",
    title: "Samsung and SK Hynix to build $520 billion AI chip hub in South Korea",
    summary:
      "South Korean President Lee Jae Myung announced an \"unprecedented\" 800 trillion won (roughly $518-520 billion) investment plan under which Samsung Electronics and SK Hynix will build two new chipmaking plants apiece in the country's southwest, aiming to expand capacity to meet surging AI-driven demand. The announcement, made June 29, 2026, is part of a broader push in which South Korea is orchestrating over 1,350 trillion won (about $880 billion) in combined chip and data-center investment from the two companies. Korean tech stocks rebounded sharply on the news.",
    detail: [
      "South Korean President Lee Jae Myung announced on June 29, 2026, an investment plan under which Samsung Electronics and SK Hynix will jointly build two new chipmaking plants apiece in the country's southwest region, describing the roughly 800 trillion won (about $518-520 billion) commitment as \"unprecedented.\"",
      "The plants are intended to rapidly expand South Korea's chip production capacity to meet surging demand tied to artificial intelligence, as the country seeks to defend and extend its position in the global AI hardware supply chain against intensifying competition.",
      "The new chip-hub project sits within a still larger national push: South Korea is separately orchestrating combined investment of at least 1,350 trillion won (roughly $880 billion) from Samsung Electronics and SK Hynix into chips and data centers, which officials described as essential digital infrastructure for the country to remain competitive in the AI era.",
      "Korean equity markets responded strongly to the announcement, with Samsung and SK Hynix shares helping to drive a rebound in the broader Korean stock market as investors welcomed the scale and specificity of the government-backed spending plan.",
      "The announcement follows a period of intensifying global competition in AI-related chip manufacturing, with rival investments also under way at Taiwan Semiconductor Manufacturing Co. and other major producers, underscoring how central large-scale capacity expansion has become to the AI hardware race across East Asia.",
    ],
    keywords: [
      "Samsung",
      "SK Hynix",
      "Semiconductors",
      "South Korea",
      "Artificial Intelligence",
      "Chip Manufacturing",
      "Capital Investment",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/tech/semiconductors/south-korea-announces-520bn-chip-plant-project-with-samsung-sk-hynix",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/06/29/korea-samsung-ai-hynix-chips/efa6b694-7394-11f1-b665-5f8be87f3787_story.html",
      },
    ],
    crossCheck: [
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/tech/semiconductors/south-korea-announces-520bn-chip-plant-project-with-samsung-sk-hynix",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/06/29/korea-samsung-ai-hynix-chips/efa6b694-7394-11f1-b665-5f8be87f3787_story.html",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-06-29/korean-stocks-rebound-as-samsung-sk-hynix-unveil-spending-plan",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/asia/east-asia/article/3358719/south-korea-unveils-us650-billion-megaprojects-dominate-global-ai-chip-market",
      },
    ],
    selectionRationale:
      "Structural industry investment with global AI supply-chain relevance and national policy backing (PRD §5-1 include criteria).",
  },
  {
    slug: "nextera-dominion-67bn-utility-merger",
    category: "Business",
    title: "NextEra to buy Dominion Energy for $67 billion in largest-ever US utility merger",
    summary:
      "NextEra Energy agreed on May 18, 2026 to acquire rival utility Dominion Energy for $67 billion, in what was described as the largest utility acquisition in U.S. history. The combined company would span from Florida to the AI data centers clustered around Virginia, reflecting surging electricity demand tied to artificial intelligence infrastructure. NextEra is already the largest U.S. utility by market value and the country's biggest renewable-energy developer. Analysts framed the deal as signaling a new era of AI-driven utility mega-mergers, as power companies seek scale to meet data-center demand.",
    detail: [
      "NextEra Energy agreed on May 18, 2026 to acquire Dominion Energy for $67 billion, a transaction reported as the largest utility acquisition in U.S. history. The deal would create a combined company with operations spanning from Florida to the cluster of AI data centers concentrated around Virginia.",
      "The merger is widely tied to surging electricity demand from artificial intelligence infrastructure. Data centers require enormous and increasingly steady power supplies, and Virginia in particular has become one of the largest data-center hubs in the world, giving Dominion's transmission and generation assets there significant strategic value.",
      "NextEra is already the largest U.S. utility by market capitalization and the country's biggest developer of renewable-energy generation. Analysts described the acquisition as adding meaningful scale and financial capacity even for a company of NextEra's existing size, reflecting how much capital the AI-driven power buildout now demands.",
      "Commentary following the announcement framed the deal as signaling a broader shift toward utility mega-mergers driven by AI infrastructure needs, with the scale of investment required to serve data-center demand pushing utilities toward consolidation to achieve the necessary scale and balance-sheet strength.",
      "The transaction adds to a wider wave of energy-sector consolidation through 2026, as utilities and independent power producers reposition to capture demand from the data-center buildout while also continuing to expand renewable generation capacity.",
    ],
    keywords: [
      "NextEra Energy",
      "Dominion Energy",
      "Utility Merger",
      "AI Data Centers",
      "Renewable Energy",
      "Mergers and Acquisitions",
      "Electricity Demand",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-05-18/nextera-to-buy-dominion-for-67-billion-to-form-utility-colossus",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/05/18/nextera-dominion-ai-electricity-utility/d3a6741e-52bc-11f1-9c40-7a0a12d9e745_story.html",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-05-18/nextera-to-buy-dominion-for-67-billion-to-form-utility-colossus",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/05/18/nextera-dominion-ai-electricity-utility/d3a6741e-52bc-11f1-9c40-7a0a12d9e745_story.html",
      },
    ],
    selectionRationale:
      "Largest-ever deal in its sector with structural implications for AI infrastructure and energy markets (PRD §5-1 include criteria).",
  },
  {
    slug: "big-tech-ai-spending-700-billion-2026",
    category: "Business",
    title: "Big Tech's AI spending tops $700 billion in 2026 despite bubble fears",
    summary:
      "Amazon, Alphabet, Microsoft, and Meta are together expected to spend nearly $700 billion on capital expenditure in 2026, most of it tied to AI data centers, with Google and Microsoft each guiding to roughly $190 billion in full-year capex and Meta raising its own estimate to $145 billion. Amazon said in late July it would boost its 2026 tech spending by an additional $20 billion after strong second-quarter results. The spending spree has begun to unsettle investors: Alphabet shares fell more than 7% after its capex guidance rose to as much as $205 billion and free cash flow turned negative for the first time since its 2004 IPO, feeding wider fears of an AI spending bubble.",
    detail: [
      "Amazon, Alphabet, Microsoft, and Meta are collectively expected to spend nearly $700 billion on capital expenditure in 2026, the large majority of it directed toward AI data-center buildout. Google and Microsoft have each guided to roughly $190 billion in full-year capex, while Meta Platforms raised its own 2026 estimate to $145 billion.",
      "Amazon added to the spending wave in late July 2026, saying it would increase this year's technology spending — mostly related to artificial intelligence — by an additional 10%, or roughly $20 billion, after reporting strong second-quarter results and cloud-division performance.",
      "Looking beyond 2026, the same four companies have committed to nearly $2.4 trillion in AI-related spending over the coming years, spanning data-center leases, construction, energy contracts, and equipment, as they compete for position in what several described as a still-nascent but rapidly scaling market.",
      "The pace of spending has begun to unsettle investors. Alphabet shares fell more than 7% after the company raised its 2026 capital-expenditure guidance to as much as $205 billion and reported that free cash flow turned negative in the second quarter for the first time since its 2004 initial public offering.",
      "Coverage of the spending wave has increasingly framed it as entering a more skeptical phase, with commentary describing an AI boom now confronting harder economic realities as investors weigh whether revenue growth can keep pace with the scale of capital committed.",
      "Against that skepticism, industry data cited alongside the earnings showed global AI sales for hyperscalers and neoclouds, excluding China, reaching about $25 billion in the first quarter of 2026 — exceeding the industry's roughly $21 billion in depreciation costs tied to data-center and chip investment for a second consecutive quarter, an early signal cited by some as evidence the spending is starting to be justified by revenue.",
    ],
    keywords: [
      "Big Tech",
      "AI Spending",
      "Capital Expenditure",
      "Data Centers",
      "Amazon",
      "Alphabet",
      "AI Bubble",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/30/amazon-second-quarter-earnings-cloud/1fee30ba-8c55-11f1-8912-d71e69d679d7_story.html",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/technology/tech-asia/what-bubble-big-tech-s-ai-spending-spree-gathers-pace-in-2026",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/30/amazon-second-quarter-earnings-cloud/1fee30ba-8c55-11f1-8912-d71e69d679d7_story.html",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/technology/tech-asia/what-bubble-big-tech-s-ai-spending-spree-gathers-pace-in-2026",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-31/big-tech-holds-2-trillion-of-spending-commitments-for-ai-boom",
      },
    ],
    selectionRationale:
      "Structural, industry-wide capital shift with global technology-supply-chain and market implications (PRD §5-1 include criteria).",
  },
  {
    slug: "2026-08-05-us-tariff-wall-faces-legal-challenges",
    category: "Macro",
    title: "US tariff wall faces mounting legal challenges from states and small businesses",
    summary:
      "The Trump administration's July 24 tariffs of 10-12.5% on 60 trading partners, justified on forced-labor grounds under Section 301 of the Trade Act, are now facing a wave of litigation. A group of Democratic-led states sued in the US Court of International Trade, following small businesses that challenged the same tariffs the day they took effect. Both suits argue the president lacks legal authority to impose the levies via this route. The challenges follow a pattern: courts and litigants have repeatedly contested Trump-era tariffs on statutory-authority grounds, though the administration has kept reimposing them under new legal theories.",
    detail: [
      "On July 24, 2026, the Trump administration imposed tariffs of 10% to 12.5% on imports from 60 trading partners, including all 27 European Union member states, citing a US Trade Representative finding that these economies had failed to adequately curb forced labor in their supply chains. The move used Section 301 of the Trade Act of 1974, a trade-enforcement statute that gives the president broad latitude to respond to practices deemed to burden American commerce.",
      "The tariffs quickly drew legal fire. Small businesses filed suit in New York on the day the duties took effect, arguing the administration was using a forced-labor justification as a pretext to reimpose tariffs a court had previously found exceeded presidential authority. A separate lawsuit followed from a group of states with Democratic attorneys general or governors, including New York and Oregon, filed in the US Court of International Trade.",
      "Both sets of plaintiffs make a similar core argument: that Section 301, however flexible, does not give the president unilateral power to impose tariffs at this scale without the fact-specific investigative process the statute traditionally requires, and that the forced-labor rationale is being used to route around a Supreme Court ruling that had already struck down an earlier iteration of the tariff program.",
      "This is not the first time Trump-era tariffs have run into this kind of legal resistance. States and small businesses have successfully challenged prior rounds of global tariffs during his second term, forcing the administration to repeatedly redraw its legal basis for the levies. Despite the string of setbacks, the White House has continued to reimpose tariffs under new statutory theories rather than abandon the strategy.",
      "A related, broader Section 301 investigation is also underway into 16 economies — accounting for roughly 75% of US imports based on 2024 trade patterns, including China and the EU — over allegations of \"structural excess capacity\" in manufacturing, suggesting the current wave of forced-labor tariffs may be a precursor to a wider tariff push rather than a one-off action.",
      "For businesses and trading partners, the practical effect is prolonged uncertainty: duties are in force and being collected even as their legal foundation is actively contested in court, with no near-term resolution expected given the pattern of appeals in prior tariff litigation.",
    ],
    keywords: [
      "Tariffs",
      "Trade Policy",
      "Forced Labor",
      "Section 301",
      "Trump Administration",
      "Court of International Trade",
      "Trade War",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/united-states-canada/article/3362848/democratic-us-states-sue-challenge-trumps-latest-round-tariffs",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/politics/2026/07/25/tariffs-trump-forced-labor/16932418-883f-11f1-9cec-0fb26676f07e_story.html",
      },
    ],
    crossCheck: [
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/economy/trade-war/trump-tariffs/us-floats-new-tariffs-on-60-economies-over-forced-labor-including-china",
      },
    ],
    selectionRationale:
      "A live legal challenge to a major US trade-policy action with direct implications for import costs across dozens of economies, not a minor or single-company story (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-05-china-cautious-growth-vows-trade-expansion",
    category: "Macro",
    title: "China's Politburo turns cautious on growth, vows to expand trade ties despite EU tensions",
    summary:
      "China's top decision-making body struck a more cautious tone on the domestic economy for the second half of 2026 while pledging to expand trade relationships, as Beijing leans on bond funding and infrastructure spending to keep growth on track. The shift comes as China struggles to lift consumer spending and reduce its reliance on exports, producing what analysts describe as a \"dual-speed\" economy. It also comes as hopes fade for narrowing the trade imbalance with the European Union, with Beijing signaling little room for compromise even as it talks up openness to trade partners more broadly.",
    detail: [
      "China's Politburo, the Communist Party's top decision-making body, vowed to step up macroeconomic policy support and bolster the resilience of capital markets for the remainder of 2026, while adopting a notably more cautious tone about the domestic growth outlook than in earlier statements this year.",
      "The caution reflects a economy still struggling on two fronts: weak consumer spending at home and a heavy, and increasingly contested, reliance on exports abroad. Policymakers are betting on bond-funded infrastructure spending to offset that weakness, a strategy that has produced what several analysts describe as a \"dual-speed\" economy — resilient in state-directed investment, soft in household consumption.",
      "On trade, Beijing's public message has been one of openness: senior officials have said China aims to boost both imports and exports in 2026 to drive trade growth, part of a broader effort to position the country as a stable, expansion-minded trade partner even as friction with the United States and Europe continues.",
      "That message is complicated by China's relationship with the European Union, where hopes for resolving a widening trade imbalance are fading. A recently published policy document from Beijing was read by trade watchers as leaving little room for compromise, a stance that could push Brussels toward more protectionist measures of its own.",
      "The combination — cautious domestic messaging, an infrastructure-led growth strategy, and a harder line with the EU even while courting other partners — illustrates the balancing act facing Chinese policymakers as they navigate a global environment shaped by the Middle East conflict's economic spillovers and an escalating series of US tariff actions.",
    ],
    keywords: [
      "China Economy",
      "Politburo",
      "Trade Policy",
      "European Union",
      "Infrastructure Spending",
      "Consumer Spending",
      "Dual-Speed Economy",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/economy/china-vows-to-expand-trade-ties-as-leaders-turn-cautious-on-economy",
      },
    ],
    crossCheck: [
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/economy/china-economy/article/3336373/china-aims-boost-imports-and-exports-2026-drive-trade-growth-senior-official",
      },
    ],
    selectionRationale:
      "A policy-level signal from China's top leadership on growth strategy and trade posture, with direct relevance to global trade flows and EU relations, not a routine data release (PRD §5-1).",
  },
  {
    slug: "2026-08-05-us-iran-edge-toward-hormuz-deal",
    category: "Macro",
    featured: true,
    title: "US and Iran edge toward deal to reopen Strait of Hormuz, though Tehran denies direct talks",
    summary:
      "US Treasury Secretary Scott Bessent said Tuesday a deal to reopen the Strait of Hormuz to free movement of shipping could come within a day or two, even as Iran publicly denied that direct negotiations were taking place. The strait has been a flashpoint since fighting between the US and Iran intensified around it in mid-2026, following a tentative ceasefire reached in June that both sides have repeatedly accused each other of violating. Markets reacted to the diplomatic signals immediately, with oil prices dropping and equities rallying on hopes that a resolution is closer than it has been in weeks.",
    detail: [
      "Treasury Secretary Scott Bessent said Tuesday that the US and Iran were in active talks and that a deal to reopen the Strait of Hormuz to \"freedom of movement\" could be reached within a day or two — a notably concrete timeline after months of on-again, off-again diplomacy over the critical shipping route.",
      "Iran's government publicly disputed that characterization, denying that direct negotiations were underway, even as officials from Qatar — which has played a mediating role — said an interim proposal had been drafted and that both Washington and Tehran had signaled progress. The gap between the US and Iranian public statements underscores how fragile and contested the diplomatic process remains.",
      "The current push follows a volatile few months. The US and Iran reached a tentative ceasefire and a framework to reopen the strait in mid-June, but implementation faltered almost immediately, with both sides accusing each other of violations. Fighting around the strait intensified again in July, even as diplomatic channels — including outreach through Pakistan — stayed open.",
      "Financial markets have been trading closely on headlines out of this negotiation for weeks. Crude oil fell roughly 5% on Tuesday alone after a Qatari official's comments on the diplomatic track, extending a decline of more than 10% over the prior two sessions, while US equities rallied on the same set of signals, illustrating how central the Hormuz question has become to near-term market pricing of energy and inflation risk.",
      "A durable reopening of the strait — one of the world's most important oil chokepoints — would remove a significant source of upside risk to global energy prices and, by extension, to the inflation and interest-rate outlook in the US and beyond. Conversely, a breakdown in talks, given the pattern of prior violations, would risk reigniting the price shock that has weighed on global growth forecasts through much of 2026.",
    ],
    keywords: [
      "Iran",
      "Strait of Hormuz",
      "Geopolitics",
      "Oil Prices",
      "Ceasefire",
      "Scott Bessent",
      "Middle East",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/national-security/2026/08/03/trump-claims-active-ceasefire-talks-iran-denies-direct-negotiations/",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/latest-oil-market-news-and-analysis-for-aug-5",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/middle-east/article/3362025/iran-halts-strikes-trump-gives-space-talks",
      },
    ],
    selectionRationale:
      "A major geopolitical development with immediate, cross-asset market impact (oil, equities, bonds) and direct bearing on the global inflation and growth outlook — the clearest candidate for today's featured issue (PRD §5-1).",
  },
  {
    slug: "2026-08-05-sp500-dow-record-close-ai-earnings",
    category: "Markets",
    title: "S&P 500, Dow close at record highs as AI-linked earnings offset Mideast jitters",
    summary:
      "The S&P 500 and the Dow Jones Industrial Average both closed at record highs, powered by a strong batch of AI-linked earnings that eased concerns about the durability of AI-driven demand. Palantir Technologies surged 29.5% after raising its annual revenue forecast, its biggest one-day gain since February 2024, while industrial bellwether Caterpillar jumped 5.6% on higher guidance tied to AI data-center-driven demand for its equipment. The rally came even as crude oil fell roughly 5% on renewed hopes for a diplomatic resolution over the Strait of Hormuz, a reminder of how tightly intertwined equity and energy markets have become this year.",
    detail: [
      "The S&P 500 and the Dow Jones Industrial Average closed at record levels, with the advance driven largely by a strong round of corporate earnings tied to artificial intelligence demand, which helped quiet investor worries about whether the AI investment cycle can sustain its pace.",
      "Palantir Technologies was the standout mover, soaring 29.5% for its biggest daily percentage gain since February 2024, after the data-analytics company raised its annual revenue forecast. Caterpillar, widely watched as a bellwether for the global industrial economy, gained 5.6% after lifting its own revenue growth guidance, citing demand from the buildout of AI data centers for its power-generation and construction equipment.",
      "Not every AI-adjacent name moved the same direction: Elon Musk's SpaceX closed up 9.4% ahead of its earnings release, then fell back roughly 4% after the report itself — its first as a public company — landed with a mix of a large revenue jump and a quarterly loss. Elsewhere, McDonald's rose 1.2% despite a disappointing quarter, while Pfizer gained 1.5% on stronger-than-expected results.",
      "The equity rally coincided with a sharp drop in crude prices, down roughly 5% on the day, after a Qatari official signaled continuing progress toward a diplomatic resolution over the Strait of Hormuz, and after US Treasury Secretary Scott Bessent said a deal to reopen the strait to Iran could come within days. Falling energy prices reinforced the risk-on mood in equities by easing near-term inflation concerns.",
      "The session captured a broader pattern that has defined markets through much of 2026: AI-linked capital spending and earnings on one hand, and Middle East geopolitical risk on the other, moving in tandem to set the tone for both stocks and commodities on any given day.",
    ],
    keywords: [
      "S&P 500",
      "Dow Jones",
      "Stock Market",
      "AI Earnings",
      "Palantir",
      "Caterpillar",
      "Record High",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/markets/dow-s-p-500-close-at-record-on-ai-linked-earnings-mideast-deal-hopes",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/stock-market-today-dow-s-p-live-updates",
      },
    ],
    selectionRationale:
      "A broad market-moving event (index records driven by a cluster of major earnings) with clear macro linkage to the Hormuz diplomacy story, not single-stock noise (PRD §5-2).",
  },
  {
    slug: "2026-08-05-oil-tumbles-below-80-hormuz-hopes",
    category: "Markets",
    title: "Oil tumbles below $80 a barrel as hopes build for a Hormuz deal",
    summary:
      "Crude oil extended a sharp decline, with Brent dropping below $79 a barrel and West Texas Intermediate falling toward $75, as optimism grew around a possible US-Iran agreement to reopen the Strait of Hormuz. Both benchmarks have now lost more than 10% over two trading sessions, unwinding much of the risk premium that had built up during months of intermittent fighting around the strait. The move reflects how closely oil markets are now tracking the diplomatic signals coming out of Washington, Tehran, and Doha.",
    detail: [
      "Oil prices extended a steep slide, with Brent crude dropping below $79 a barrel and US benchmark West Texas Intermediate falling toward $75, as traders grew more confident that a diplomatic resolution over the Strait of Hormuz was within reach.",
      "The decline has been rapid: both Brent and WTI have lost more than 10% over just two trading sessions, a sharp reversal from earlier in the summer when Brent briefly topped $100 a barrel on supply fears tied to the conflict around the strait.",
      "The immediate catalyst was a mix of official signals — a Qatari official's comments on continuing progress in mediation efforts, and US Treasury Secretary Scott Bessent's statement that a deal to reopen the strait could be reached within a day or two — even as Iran publicly denied that direct talks were underway.",
      "Energy companies have been warning that the elevated-price environment was already reshaping the market regardless of a deal's ultimate timing: Exxon and Chevron both flagged that fuel prices would likely stay elevated for a period given how much refining capacity had been knocked offline by the conflict, a dynamic that a Hormuz reopening would only gradually unwind.",
      "For markets more broadly, the drop in oil prices is functioning as a disinflationary signal, feeding directly into lower Treasury yields and a more risk-tolerant tone in equities, which is why a story that began as a geopolitical and shipping issue has become one of the most closely watched inputs across asset classes this week.",
    ],
    keywords: [
      "Oil Prices",
      "Brent Crude",
      "WTI",
      "Strait of Hormuz",
      "Commodities",
      "Energy Markets",
      "Iran",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/emerging-markets-stay-under-pressure-as-iran-impasse-lifts-oil",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/national-security/2026/08/03/trump-claims-active-ceasefire-talks-iran-denies-direct-negotiations/",
      },
    ],
    selectionRationale:
      "A sharp, multi-session commodity move with direct read-through to inflation and rate expectations globally, not short-term single-session noise (PRD §5-2).",
  },
  {
    slug: "2026-08-05-treasury-yields-ease-oil-drop",
    category: "Markets",
    title: "Treasury yields ease as falling oil prices curb Fed rate-hike bets",
    summary:
      "US Treasury yields moved lower this week as the sharp drop in crude oil prices reduced pressure on the Federal Reserve to raise rates further, with the benchmark 10-year yield at 4.62% and the 2-year yield at its lowest level since July 20. The move offers some relief after a summer in which the 30-year yield spent its longest stretch above 5% since the 2007-08 financial crisis, driven by concerns about persistent inflation and a growing federal debt load. The shift illustrates how directly this week's oil-price decline, tied to hopes for a Strait of Hormuz resolution, is feeding through into the broader interest-rate outlook.",
    detail: [
      "US Treasury yields eased this week, with the benchmark 10-year note at 4.62% and the 2-year yield touching its lowest level since July 20, as falling oil prices reduced the perceived odds of additional Federal Reserve interest-rate increases.",
      "The move is a reversal of the trend that dominated much of the summer: the 30-year Treasury yield held above 5% for its longest stretch since the run-up to the 2007-08 financial crisis, as investors grew increasingly concerned about a combination of sticky inflation and a growing pile of federal debt.",
      "This week's shift is tied directly to the drop in crude prices following signals of progress toward a US-Iran agreement to reopen the Strait of Hormuz. Lower energy prices reduce a key input into near-term inflation readings, which in turn eases the case for further Fed tightening — the same logic that has been supporting equities this week.",
      "The Fed itself has been sending mixed signals. At its most recent meeting, held in late July, the central bank left rates unchanged for a fifth straight meeting, but three officials dissented in favor of a further increase, reflecting real division within the committee about how much further monetary tightening is needed given inflation that has remained above the Fed's 2% target for more than five years.",
      "Bond investors are now watching two variables in tandem: whether the Hormuz diplomacy holds, which would extend the current disinflationary relief in energy prices, and how the Fed's internal debate over further hikes resolves at its next meeting — with this week's yield moves suggesting markets currently see the oil-driven relief as the more dominant near-term factor.",
    ],
    keywords: [
      "Treasury Yields",
      "Federal Reserve",
      "Bond Market",
      "Interest Rates",
      "Oil Prices",
      "Inflation",
      "10-Year Yield",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/treasuries-rise-as-falling-oil-prices-trim-fed-rate-hike-wagers",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-22/us-30-year-yield-raises-alarm-in-longest-run-above-5-since-2007",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/national-security/2026/08/03/trump-claims-active-ceasefire-talks-iran-denies-direct-negotiations/",
      },
    ],
    selectionRationale:
      "Connects a bond-market move directly to both Fed policy and the Hormuz diplomacy story, giving readers the fixed-income leg of a cross-asset macro event (PRD §5-2).",
  },
  {
    slug: "2026-08-05-ai-boom-deepens-memory-chip-shortage",
    category: "Business",
    title: "AI boom deepens global memory chip shortage, squeezing PC and phone makers",
    summary:
      "A memory-chip shortage driven by surging demand from AI data-center buildouts is intensifying, with prices up roughly sixfold and industry researchers warning the crunch is likely to persist until around 2027. PC makers including HP, Asus and Acer have begun using small volumes of chips from China's ChangXin Memory Technologies to work around the shortage, while Apple is expected to raise iPhone prices this fall as chip costs climb. The squeeze illustrates how AI infrastructure spending is now spilling over into consumer electronics pricing well beyond the data-center hardware makers most directly tied to the AI boom.",
    detail: [
      "A global shortage of memory chips, driven by surging demand from AI data-center buildouts, is deepening, with industry researchers describing it as an unprecedented crunch that is pushing prices up by roughly sixfold from prior levels.",
      "Market-research firm IDC has projected that the shortage will meaningfully shrink global smartphone sales — by as much as 200 million units — and that the global smartphone market itself could contract by nearly 13% in 2026, the sharpest drop on record for the industry, as manufacturers struggle to secure enough memory at viable prices.",
      "The shortage is forcing unusual supply-chain workarounds: leading PC makers HP, Asus and Acer have begun incorporating small volumes of chips from China's ChangXin Memory Technologies (CXMT) into their products, a shift that would have been unlikely before the crunch given the historical dominance of Samsung, SK Hynix and Micron in the memory market.",
      "Even as those three top suppliers ramp up DRAM production, analysts expect the shortage to persist until around 2027, meaning the pricing pressure on device makers — and by extension consumers — is likely to be a multi-year story rather than a short-term blip.",
      "The effects are already visible at the high end of the consumer market: Apple has been raising prices on MacBooks and iPads, and is expected to lift iPhone prices this fall as the AI-driven chip-cost increases work their way through its supply chain, illustrating how a shortage that began in AI infrastructure has become a broad-based cost pressure across consumer technology.",
      "The dynamic underscores a theme that has run through much of 2026: the scale of capital being funneled into AI data-center buildouts is large enough to distort adjacent markets — in this case, the memory chips that PCs, phones and other consumer devices also depend on — well beyond the AI industry itself.",
    ],
    keywords: [
      "Memory Chips",
      "Semiconductor Shortage",
      "AI Infrastructure",
      "Supply Chain",
      "DRAM",
      "Apple",
      "Consumer Electronics",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/tech/semiconductors/memory-shortage-set-to-run-until-2027-as-chipmakers-focus-on-ai",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/tech/tech-trends/article/3358907/chip-supply-chain-braces-more-price-hikes-upstream-parts-create-new-bottlenecks",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/technology/2026/06/26/apple-is-raising-prices-will-iphones-be-next/",
      },
    ],
    selectionRationale:
      "An industry-wide supply-chain and pricing shift spanning multiple sectors (semiconductors, PCs, smartphones), not a single-company event (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-05-paramount-warner-merger-halted-judge",
    category: "Business",
    title: "Judge halts Paramount-Warner Bros. Discovery $110 billion merger amid states' antitrust suit",
    summary:
      "A federal judge ordered Paramount Skydance and Warner Bros. Discovery to pause their roughly $110 billion merger for at least two weeks, granting a request from a coalition of 12 Democratic state attorneys general who argue the deal would harm competition in media and entertainment. The pause came even though the US Justice Department had separately concluded the merger was unlikely to harm competition or consumers. A trial in the states' case has now been scheduled for March 2027, meaning the deal — first announced in February 2026 — faces months more legal uncertainty before it can close.",
    detail: [
      "A federal judge ordered Paramount Skydance Corp. and Warner Bros. Discovery Inc. to halt their proposed merger for at least two weeks, granting a request from a coalition of Democratic state attorneys general who are seeking to block the deal on antitrust grounds.",
      "The injunction responds to a lawsuit brought by 12 state attorneys general, who argue that the combination — which would bring together two of the largest remaining traditional media and streaming companies — would irreparably harm competition in the industry if allowed to close before their case is heard.",
      "The states' position is notably at odds with the federal government's own antitrust review: the US Department of Justice had separately concluded that the merger was not likely to harm competition or consumers, setting up an unusual dynamic in which state-level enforcers are pursuing a case the federal regulator chose not to bring.",
      "A trial in the states' lawsuit has now been scheduled to begin in March 2027 in California, meaning Paramount and Warner Bros. Discovery face many more months of legal uncertainty before the deal can proceed to closing, even as both companies continue to argue the tie-up should be allowed to go forward.",
      "The merger itself was first announced in late February 2026, with Paramount agreeing to pay $31.00 per share in cash for all outstanding Warner Bros. Discovery shares, valuing the transaction at roughly $110 billion — one of the largest media deals in years, reflecting continued consolidation pressure across an industry grappling with streaming economics and audience fragmentation.",
    ],
    keywords: [
      "Paramount",
      "Warner Bros. Discovery",
      "Mergers & Acquisitions",
      "Antitrust",
      "Media Industry",
      "State Attorneys General",
      "Streaming",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/20/paramount-skydances-110b-merger-with-warner-bros-discovery-paused-by-judge/",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/united-states-canada/article/3361266/us-judge-suspends-paramounts-acquisition-warner-bros",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/paramount-warner-bros-merger-challenges-set-for-trial-in-march",
      },
    ],
    selectionRationale:
      "A major, high-value M&A deal with broad industry consolidation implications now facing a court-ordered halt — a genuine structural development, not routine deal news (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-05-spacex-first-earnings-post-ipo-ai-capex",
    category: "Business",
    title: "SpaceX posts mixed first earnings as a public company as AI-driven capex weighs on results",
    summary:
      "SpaceX reported its first earnings as a public company, posting a 92% jump in quarterly revenue driven by Starlink subscription growth and rising AI compute demand, alongside a net loss of more than $500 million. The results reflect the massive capital intensity of the company's expansion, including AI-linked data-center spending, following its record-setting $85.7 billion IPO in June that briefly pushed its market value above $2 trillion. SpaceX shares, already down roughly half from their post-IPO peak, fell further after the earnings release as investors weighed the scale of ongoing losses against the revenue growth.",
    detail: [
      "SpaceX reported its first quarterly results as a public company, posting a 92% year-over-year jump in revenue, driven by continued growth in Starlink satellite-internet subscriptions and rising demand tied to AI compute workloads.",
      "Alongside that revenue growth, the company reported a net loss of more than $500 million for the quarter, underscoring how capital-intensive its expansion remains even as the top line accelerates — spending that increasingly includes investment tied to AI data-center capacity rather than only its core rocket and satellite businesses.",
      "The earnings mark a closely watched milestone: SpaceX went public in June 2026 in the largest initial public offering on record, raising $85.7 billion and briefly pushing the company's market capitalization above $2 trillion on its debut day, a valuation built substantially on expectations for future growth rather than current profitability.",
      "That valuation has already come under pressure. SpaceX shares are down by roughly half from their June peak heading into this earnings report, as some investors grew skeptical that Elon Musk's long-term ambitions for the company justified the scale of ongoing capital spending — concerns the mixed results did little to fully resolve.",
      "Shares moved further in postmarket trading following the release, as investors weighed the strong revenue growth against both the size of the quarterly loss and the company's continued heavy capital expenditure, including outlays tied to AI infrastructure that echo the spending patterns seen across the broader technology sector this year.",
      "The results add SpaceX to the list of major companies whose earnings this week were shaped as much by AI-related capital spending as by their traditional core businesses, a pattern that has become a defining feature of this earnings season across sectors from industrials to aerospace.",
    ],
    keywords: [
      "SpaceX",
      "IPO",
      "AI Capex",
      "Elon Musk",
      "Earnings",
      "Starlink",
      "Capital Spending",
    ],
    date: "2026-08-05",
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/technology/2026/08/04/elon-musks-spacex-lost-hundreds-millions-after-record-setting-ipo/",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/aerospace-defense-industries/spacex-reports-92-revenue-jump-in-first-post-ipo-earnings",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/spacex-exceeds-revenue-estimates-in-first-earnings-since-ipo",
      },
    ],
    selectionRationale:
      "First earnings report of a newly public, market-moving company with direct relevance to the broader AI-capex investment theme running through markets this week (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-iran-oman-hormuz-shipping-route-deal",
    category: "Macro",
    featured: true,
    title: "Iran and Oman finalize coordinates for a new Strait of Hormuz shipping corridor",
    summary:
      "Iran's Foreign Ministry said Tehran and Muscat have finalized the geographic coordinates of a proposed shipping corridor through the Strait of Hormuz, under which vessels would enter the Persian Gulf via an Iranian-controlled route and exit via one controlled by Oman. A joint statement is in final drafting, and US officials suggested a broader agreement could be reached within days. The arrangement remains contingent on the US lifting its blockade of Iranian ports, and a separate Iranian push to levy transit fees is opposed by the US and Gulf states as inconsistent with international maritime law. Roughly a fifth of global oil and LNG trade transits the strait, so even a preliminary framework has been enough to move oil prices and equity markets worldwide this week.",
    detail: [
      "Iran's Foreign Ministry said on August 5 that Tehran and Muscat have agreed on the geographic coordinates of a new shipping corridor through the Strait of Hormuz, under which vessels bound for the Persian Gulf would enter via a route under Iranian control and exit via a separate route controlled by Oman. Officials from both countries said a joint statement formalizing the arrangement is in its final drafting stage.",
      "US Treasury Secretary Scott Bessent said as recently as August 5 that a broader deal could be reached within about two days, reflecting the pace at which talks have moved after months of disruption to shipping through the strait tied to the wider war in Iran. The corridor proposal is the most concrete step yet toward normalizing traffic through the waterway.",
      "The arrangement is not unconditional: Iran has made the deal contingent on the United States lifting its blockade of Iranian ports, a step Washington has not yet committed to. Iran is also seeking to charge transit fees on vessels using the corridor, a proposal the US and Gulf states have opposed as inconsistent with United Nations rules on freedom of navigation through international straits.",
      "The stakes are unusually high for the global economy because of the strait's outsized role in energy trade: roughly 20% of the world's oil and liquefied natural gas shipments pass through Hormuz. Prolonged disruption there has been a central input into this year's inflation and growth forecasts from the IMF and World Bank alike, both of which flagged the war's energy-price effects as a primary downside risk for 2026.",
      "Financial markets have moved in step with the on-again, off-again progress of the talks: oil prices have swung sharply over the past two weeks on shifting odds of a deal, and gold and equities have rallied on days when a resolution appeared closer, reflecting how concentrated global market risk has become around this single flashpoint.",
      "A durable reopening of Hormuz would also reshape the calculus facing the Federal Reserve, whose policymakers split three ways at their July meeting partly over how much further energy-driven inflation from the conflict might still have to run. Traders are now watching the corridor talks as closely as incoming inflation data ahead of the Fed's September meeting.",
    ],
    keywords: [
      "Strait of Hormuz",
      "Iran",
      "Oman",
      "Oil Shipping",
      "Geopolitics",
      "Energy Security",
      "Iran War",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/iran-says-agreement-on-hormuz-shipping-route-reached-with-oman",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/middle-east/article/3363094/iran-and-oman-agree-new-hormuz-route-tehran-says",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/iran-says-agreement-on-hormuz-shipping-route-reached-with-oman",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/world/middle-east/article/3363094/iran-and-oman-agree-new-hormuz-route-tehran-says",
      },
    ],
    selectionRationale:
      "The single geopolitical development with the widest global ripple effects today — a concrete step toward reopening a chokepoint for a fifth of world oil/LNG trade, directly moving energy prices, equities, and Fed policy expectations (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-fed-holds-rates-hawkish-dissent",
    category: "Macro",
    title: "Fed holds rates steady as three regional presidents dissent in favor of a hike",
    summary:
      "The Federal Reserve held its benchmark rate at 3.50%-3.75% at its July 29 meeting, but the 9-3 vote included the first three-way hawkish dissent since 2016, with regional bank presidents Beth Hammack, Neel Kashkari and Lorie Logan all favoring a rate increase. The dissenters pointed to inflation pressure from tariffs and from war-linked energy costs tied to the Iran conflict. Chair Kevin Warsh, in only his second meeting leading the committee, described the split as a genuine internal disagreement rather than a formality. The division sets up a high-stakes September 16 meeting, with markets now parsing every signal — including this week's progress on a Strait of Hormuz shipping deal — for clues on whether the Fed hikes, holds, or cuts next.",
    detail: [
      "The Federal Open Market Committee voted 9-3 on July 29 to hold its benchmark interest rate in a range of 3.50% to 3.75%, but the dissent was unusually large: three regional Federal Reserve Bank presidents — Cleveland's Beth Hammack, Minneapolis's Neel Kashkari and Dallas's Lorie Logan — all voted in favor of a rate increase rather than a hold, the first three-way hawkish dissent at the Fed since 2016.",
      "The dissenting officials pointed to two distinct inflationary pressures: tariff-driven cost increases working their way through consumer prices, and energy costs stemming from the war in Iran, which has periodically disrupted oil shipping through the Strait of Hormuz and kept a risk premium embedded in crude prices for much of 2026.",
      "Chair Kevin Warsh, presiding over only his second meeting since taking the helm, characterized the divide as a genuine, substantive disagreement among policymakers about the balance of risks — inflation still running above target on one side, versus signs of a cooling labor market on the other — rather than a routine procedural dissent.",
      "The decision keeps the Fed on hold for now, but the scale of the dissent signals real internal division heading into the September 16 meeting, where officials will have another full inflation and employment data cycle — plus whatever progress has been made on the Hormuz shipping talks — to weigh before their next decision.",
      "Markets have treated the July meeting as a pivot point: gold, Treasury yields and the dollar have all moved on shifting expectations about whether easing progress in the Middle East will let the Fed hold its current stance, or whether persistent tariff- and energy-driven inflation will force the three dissenters' view to prevail by September.",
      "The episode underscores how directly this year's geopolitical shocks — the Iran war and the tariff regime — have become inputs into core US monetary policy, a dynamic that is also shaping central bank decisions and currency markets well beyond the United States.",
    ],
    keywords: [
      "Federal Reserve",
      "Interest Rates",
      "Monetary Policy",
      "Kevin Warsh",
      "Inflation",
      "FOMC",
      "Tariffs",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-29/fed-holds-rates-steady-three-officials-dissent-favoring-a-hike",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/economy/fed-holds-rates-steady-as-3-policymakers-dissent-in-favor-of-hike",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-29/fed-holds-rates-steady-three-officials-dissent-favoring-a-hike",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/economy/fed-holds-rates-steady-as-3-policymakers-dissent-in-favor-of-hike",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/07/29/fed-holds-interest-rates-steady-warsh-second-meeting/",
      },
    ],
    selectionRationale:
      "A genuinely split Fed board, with the largest hawkish dissent in nearly a decade, is a global signal for dollar funding costs and every central bank watching the September decision (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-eu-china-trade-surplus-standoff",
    category: "Macro",
    title: "EU-China trade standoff hardens as Beijing's surplus hits a record ahead of October deadline",
    summary:
      "China's goods trade surplus with the European Union has climbed to a record — roughly €360 billion for 2025, or about €1 billion a day — intensifying a standoff that EU and Chinese officials tried to defuse with a June framework agreement covering trade balancing, export controls, intellectual property and WTO reform. Brussels has set an October deadline for 'tangible results' on rebalancing, but recent signals from Beijing suggest little appetite for major concessions given its structural leverage. The dispute adds a second major trade front for the global economy this year, alongside the ongoing US-China relationship, with direct implications for European manufacturing and any EU import measures that follow if the October deadline passes without progress.",
    detail: [
      "China's goods trade surplus with the European Union reached a record roughly €360 billion in 2025 — about €1 billion every day — up sharply from €182 billion just five years earlier, cementing trade imbalance as one of the most politically charged issues in EU-China relations.",
      "EU Trade Commissioner Maroš Šefčovič and Chinese Commerce Minister Wang Wentao met in late June to agree a framework meant to address the imbalance, committing both sides to four workstreams: trade and investment balancing, export controls, intellectual property rights, and reform of the World Trade Organization, alongside a new joint mechanism to monitor trade flows.",
      "Brussels attached an October deadline for 'tangible results' from that framework, but subsequent signals from Beijing have left little room for optimism that major concessions are coming, given the structural and leverage imbalances that favor China in areas like rare-earth exports and industrial capacity.",
      "The dispute is playing out against a backdrop of European anxiety over deindustrialization, as European officials warn that entire sectors of the continent's economy risk being undercut by state-subsidized Chinese imports — a dynamic some have likened to an intensified rerun of the 'China shock' that hit US manufacturing in the 2000s.",
      "If the October deadline passes without meaningful rebalancing, the EU has signaled it could move toward tariff or import-restriction measures against China, which would open a second major front in global trade policy this year alongside the existing US-China trade relationship and add fresh uncertainty to global supply chains already adjusting to tariff regimes elsewhere.",
      "The standoff is a reminder that this year's trade tensions are not confined to the United States: multiple major economies are now simultaneously renegotiating their trade relationships with China, with implications for manufacturers, exporters and consumers well beyond the parties directly involved.",
    ],
    keywords: [
      "EU-China Trade",
      "Trade Surplus",
      "Tariffs",
      "European Union",
      "Deindustrialization",
      "Trade Policy",
      "Rare Earths",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/china/diplomacy/article/3358808/eu-sets-october-deadline-tangible-results-china-imbalances-after-key-trade-talks",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-14/china-s-trade-surplus-with-eu-hits-record-as-tensions-intensify",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-14/china-s-trade-surplus-with-eu-hits-record-as-tensions-intensify",
      },
    ],
    selectionRationale:
      "A second major global trade front opening alongside US-China tensions, with a record imbalance and a hard October deadline that could trigger new EU trade measures (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-oil-prices-swing-hormuz-deal-hopes",
    category: "Markets",
    title: "Oil prices swing sharply as traders price in a possible Hormuz reopening deal",
    summary:
      "Crude oil has been unusually volatile over the past two weeks, falling as much as 11% at one point on growing optimism that Iran and Oman are close to a Strait of Hormuz shipping agreement, before stabilizing as talks progressed through August 5. Brent and WTI remain well below the highs reached during the worst of the shipping disruptions earlier in the war, but prices continue to whip on every headline out of the negotiations. The moves illustrate how concentrated oil-market risk has become around a single geopolitical variable, with direct knock-on effects for inflation expectations and central-bank policy worldwide.",
    detail: [
      "Oil prices have swung sharply through late July and early August as traders repeatedly repriced the odds of a Strait of Hormuz shipping agreement between Iran and Oman, with crude falling as much as 11% in a single week on optimism a deal was close, before paring some of that move as talks continued without a final signed agreement.",
      "The volatility reflects how much of the current oil-price risk premium is tied specifically to Hormuz-related supply disruption from the Iran war, rather than to underlying global demand: any credible sign that shipping through the strait will normalize has been enough to trigger outsized single-session moves.",
      "US Treasury Secretary Scott Bessent's comment on August 5 that a broader deal could arrive within roughly two days added further momentum to the recent decline in prices, even as the agreement remains contingent on the US lifting its blockade of Iranian ports.",
      "Because roughly a fifth of global oil and LNG trade transits Hormuz, the price swings have been closely watched well beyond energy-trading desks — they feed directly into inflation forecasts from the IMF and World Bank, both of which cited energy costs from the conflict as a key downside risk for 2026 global growth.",
      "The oil market's reaction has also become a proxy indicator for the Federal Reserve's next move: falling energy prices ease one of the two inflationary pressures that drove three regional Fed presidents to dissent in favor of a rate hike at the July meeting, making the Hormuz talks as relevant to bond traders as to oil traders.",
      "Even with recent declines, prices remain sensitive to reversal — a breakdown in the Iran-Oman talks, a dispute over Iran's proposed transit fees, or renewed hostilities could send crude sharply higher again, underscoring the fragility of the current calm.",
    ],
    keywords: [
      "Oil Prices",
      "Strait of Hormuz",
      "Crude Oil",
      "Commodities",
      "Iran War",
      "Energy Markets",
      "Brent Crude",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/latest-oil-market-news-and-analysis-for-aug-6",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/article/3354707/crude-oil-drops-us-inches-towards-iran-deal-reopen-strait-hormuz",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/latest-oil-market-news-and-analysis-for-aug-6",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/news/article/3354707/crude-oil-drops-us-inches-towards-iran-deal-reopen-strait-hormuz",
      },
    ],
    selectionRationale:
      "Oil is the primary transmission channel from the Hormuz/Iran situation into global inflation and monetary policy, and today's price action is a direct market read on that risk (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-global-stocks-record-highs-hormuz-optimism",
    category: "Markets",
    title: "Global stocks hold near record highs as Hormuz optimism and AI earnings drive cross-currents",
    summary:
      "US, Japanese and Australian equity benchmarks have all traded near or at record highs this week, lifted by growing hopes for a Strait of Hormuz shipping resolution alongside a heavy slate of AI-linked corporate earnings. The Dow added roughly 0.9% on August 5 alone, while Japan's Nikkei and Australian shares touched all-time highs on the same catalyst. Beneath the index-level gains, earnings from AI-exposed companies have produced sharp divergence between winners and losers, showing how concentrated this rally has become around a small number of macro and technology-specific themes.",
    detail: [
      "US equity benchmarks held near record territory on August 5, with the Dow Jones Industrial Average adding roughly 473 points, or about 0.9%, as investors weighed growing optimism around a possible Strait of Hormuz shipping agreement between Iran and Oman against a dense week of corporate earnings.",
      "The rally was not confined to US markets: Japan's Nikkei 225 closed at an all-time high the same week, and Australian shares also touched record levels, with strategists in both markets attributing the moves directly to easing bets tied to the Hormuz talks rather than to domestic economic data.",
      "Beneath the headline index gains, earnings from AI-linked companies drove sharp cross-currents this week, with capital-spending announcements and demand signals from chipmakers, hyperscalers and device makers producing some of the largest single-day stock moves of the earnings season so far.",
      "The synchronized nature of the rally — spanning US, Japanese and Australian markets on the same geopolitical catalyst — illustrates how concentrated global market risk has become around a single flashpoint this year, echoing the same dynamic visible in oil and gold prices.",
      "Investors are treating the coming days as pivotal: confirmation of a Hormuz agreement could extend the rally further by removing a persistent tail risk from markets, while a breakdown in talks could quickly reverse this week's gains given how much of the move has been priced on optimism rather than a signed deal.",
      "The AI-earnings cross-currents add a second, more company-specific layer of risk on top of the geopolitical one, meaning the next leg for global equities likely depends on both fronts resolving in investors' favor simultaneously.",
    ],
    keywords: [
      "Stock Market",
      "Strait of Hormuz",
      "Nikkei 225",
      "Dow Jones",
      "AI Earnings",
      "Equities",
      "Record Highs",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/08/05/stocks-markets-rates-oil-prices/31e2dafc-908b-11f1-9fdc-0a725c989a7b_story.html",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/markets/japan-stocks-close-at-all-time-high-as-investors-bet-on-iran-deal",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/08/05/stocks-markets-rates-oil-prices/31e2dafc-908b-11f1-9fdc-0a725c989a7b_story.html",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/markets/japan-stocks-close-at-all-time-high-as-investors-bet-on-iran-deal",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/australian-stocks-rise-to-record-on-iran-hopes-economic-bets",
      },
    ],
    selectionRationale:
      "A globally synchronized equity rally across three continents tied to a single geopolitical catalyst, with real portfolio-level implications, not routine daily noise (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-yen-rallies-us-japan-intervention",
    category: "Markets",
    title: "Yen rallies off 40-year low after rare coordinated US-Japan intervention",
    summary:
      "The Japanese yen has rebounded more than 1% against both the dollar and the euro after the US Treasury and Japan carried out coordinated intervention in late July and early August, pulling the currency back from a 40-year low near 163 per dollar to around 149-157. Reports indicate the US funded part of its yen purchases using euros rather than dollars, a step meant to support the yen without visibly undermining Washington's own strong-dollar posture. Bank of America now forecasts the yen strengthening a further 6% by year-end, underscoring how rare and consequential this joint action has been.",
    detail: [
      "The US Treasury and Japan's Ministry of Finance carried out coordinated intervention in currency markets through late July and early August, buying yen to arrest its slide after the currency touched a 40-year low of roughly 163 per dollar, an unusually rare instance of the two governments acting together in FX markets.",
      "The intervention pulled the yen back to a range of roughly 149 to 157 per dollar, with the currency gaining more than 1% against both the dollar and the euro in the aftermath, as traders recalibrated expectations for how much further authorities are willing to act to prevent a disorderly depreciation.",
      "Notably, reporting indicates the US Treasury funded a portion of its yen purchases using euros rather than dollars — a structure strategists say was designed to support the yen without directly signaling a shift away from Washington's stated preference for a strong dollar, a dynamic one Bloomberg analysis described as a distinctive feature of the current administration's approach to currency policy.",
      "Bank of America has forecast the yen strengthening by a further 6% by the end of 2026, a notably bullish call that reflects growing conviction among strategists that authorities will continue to defend the currency against renewed weakness rather than tolerate a return toward the 160s.",
      "A weak yen had been a double-edged sword for the Japanese economy this year: it boosted the yen-denominated profits of major exporters like Toyota, but also fed imported inflation and became a source of friction in Japan's trade relationship with Washington, making the currency's stabilization a priority for policymakers on both sides.",
      "Coordinated intervention of this kind is rare enough that its use signals real concern among both governments about disorderly currency moves, with knock-on effects for Japanese government bond yields, carry-trade positioning, and capital flows across Asian currency markets more broadly.",
    ],
    keywords: [
      "Japanese Yen",
      "Currency Intervention",
      "US Treasury",
      "Foreign Exchange",
      "Bank of America",
      "Dollar",
      "Carry Trade",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/bank-of-america-sees-yen-jumping-6-by-end-of-2026",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/08/02/yen-dollar-currency-trump-economy/e8a03168-8edd-11f1-9fdc-0a725c989a7b_story.html",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/bank-of-america-sees-yen-jumping-6-by-end-of-2026",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/2026/08/02/yen-dollar-currency-trump-economy/e8a03168-8edd-11f1-9fdc-0a725c989a7b_story.html",
      },
    ],
    selectionRationale:
      "A rare coordinated G-2 currency intervention with direct effects on Japanese bond yields, carry trades and global capital flows — a structural FX-policy event, not routine daily movement (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-google-deepmind-hassabis-jeff-dean-shakeup",
    category: "Business",
    title: "Google DeepMind leadership shakeup: Hassabis steps back, Jeff Dean departs to start his own company",
    summary:
      "Alphabet announced on August 5 that Demis Hassabis is moving from CEO of Google DeepMind to Chairman, taking on a new Alphabet Chief Scientist role, while ceding day-to-day control of the AI lab to Koray Kavukcuoglu. Separately, longtime Google AI leader Jeff Dean is departing to start his own company, in which Google will invest. The reshuffle consolidates AI decision-making at a moment when Google faces growing pressure from Anthropic and OpenAI, with its flagship Gemini update running behind its originally planned June launch. The changes mark one of the most significant leadership shifts among the handful of companies at the frontier of AI development this year.",
    detail: [
      "Alphabet announced on August 5 that Demis Hassabis, the co-founder and chief executive of Google DeepMind, is moving into a Chairman role at the AI lab while taking on a newly created position as Alphabet's Chief Scientist, with day-to-day leadership of DeepMind passing to Koray Kavukcuoglu.",
      "In a separate but related move, Jeff Dean — one of Google's longest-serving and most prominent AI leaders — is leaving the company to start his own venture, which Google has agreed to invest in, a structure that keeps some financial tie between Dean's new company and his former employer even as he departs day-to-day operations.",
      "The reshuffle consolidates AI leadership more tightly around a smaller group of executives at a moment when Google is under visible competitive pressure: the company's flagship Gemini model update has run behind its originally planned June 2026 launch timeline, feeding concerns that Google is losing ground to Anthropic and OpenAI in the race to ship frontier AI systems.",
      "Hassabis's shift to a chairman-plus-chief-scientist role is notable because it removes him from day-to-day operational control of DeepMind for the first time since Google merged its AI research efforts under his leadership, even as he retains a senior strategic voice across Alphabet's broader AI efforts.",
      "The changes come amid a broader wave of leadership movement across the AI industry this year, as the handful of labs at the frontier of the technology compete not only on model capability but on retaining and organizing the small pool of researchers and executives capable of leading that work.",
      "Because Google, Anthropic and OpenAI are widely viewed as the three organizations currently setting the pace of frontier AI development, a leadership shake-up at any one of them has implications well beyond the company itself — for talent flows, model release timing, and the broader AI capital-spending cycle that is already reshaping global technology investment.",
    ],
    keywords: [
      "Google DeepMind",
      "Demis Hassabis",
      "Jeff Dean",
      "Alphabet",
      "Artificial Intelligence",
      "Gemini",
      "Tech Leadership",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/google-deepmind-boss-hassabis-moves-to-chair-role-in-shakeup",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/technology/2026/08/05/google-top-ai-leader-demis-hassabis-steps-aside-major-shakeup/",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-05/google-deepmind-boss-hassabis-moves-to-chair-role-in-shakeup",
      },
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/technology/2026/08/05/google-top-ai-leader-demis-hassabis-steps-aside-major-shakeup/",
      },
    ],
    selectionRationale:
      "A leadership shake-up at one of the three frontier AI labs signals real competitive pressure in the AI race, with industry-wide implications for talent and the AI capex cycle (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-tsmc-hyperscaler-ai-capex-ramp",
    category: "Business",
    title: "TSMC lifts 2026 capex guidance again as hyperscaler AI spending keeps accelerating",
    summary:
      "TSMC has raised its 2026 capital-expenditure guidance to between $60 billion and $64 billion, citing sustained demand for AI chips, while consensus estimates for combined 2026 capex among US hyperscalers have been revised roughly 30% higher over the past six months to above $700 billion. The upward revisions on both the supply and demand sides point to a structural reallocation of global capital toward AI infrastructure that shows no sign of slowing. The scale of spending is already reshaping the broader semiconductor supply chain, from equipment makers to energy providers powering the data centers being built.",
    detail: [
      "TSMC raised its 2026 capital-expenditure guidance to a range of $60 billion to $64 billion, an increase of at least $4 billion from its prior estimate, citing sustained demand for advanced chips used in AI training and inference hardware.",
      "The upward revision on the supply side has been matched by an even larger shift on the demand side: consensus estimates for combined 2026 capital spending among major US hyperscalers have been revised roughly 30% higher over the past six months, now standing above $700 billion.",
      "The scale of these upward revisions — both from the world's largest contract chipmaker and from the companies buying its output — points to a structural reallocation of global capital toward AI infrastructure that has continued to accelerate rather than plateau, even as some investors have periodically questioned whether AI capital spending has outrun near-term returns.",
      "The ramp has already produced visible strain elsewhere in the technology supply chain: a related global memory-chip shortage, driven by the same AI data-center buildout, has pushed DRAM prices up roughly sixfold and is expected to shrink global smartphone shipments by as much as 200 million units this year, illustrating how capital concentrated in one part of the AI stack is distorting adjacent markets.",
      "Companies further down the supply chain — semiconductor equipment makers, power-infrastructure providers, and specialty materials suppliers — are all seeing demand shaped by the pace of this capex cycle, making TSMC's guidance one of the most closely watched single data points for gauging the durability of the broader AI investment boom.",
      "With both chipmakers and hyperscalers revising spending higher in the same period, the current data suggests the AI capital-spending supercycle remains in an accelerating phase rather than a maturing one, a trend with implications for global capital markets, energy demand, and semiconductor supply chains well into 2027.",
    ],
    keywords: [
      "TSMC",
      "AI Capex",
      "Semiconductors",
      "Hyperscalers",
      "Data Centers",
      "Chip Supply Chain",
      "Capital Spending",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/tech/big-tech/article/3350346/tsmc-targets-over-30-revenue-surge-2026-ramps-capex-amid-booming-ai-demand",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-16/tsmc-beats-lofty-estimates-in-latest-sign-of-sustained-ai-demand",
      },
    ],
    crossCheck: [
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/tech/big-tech/article/3350346/tsmc-targets-over-30-revenue-surge-2026-ramps-capex-amid-booming-ai-demand",
      },
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-07-16/tsmc-beats-lofty-estimates-in-latest-sign-of-sustained-ai-demand",
      },
    ],
    selectionRationale:
      "A structural, industry-wide reallocation of global capital toward AI infrastructure spanning chipmakers and hyperscalers alike, not a single-company data point (PRD §5-1/§5-2).",
  },
  {
    slug: "2026-08-06-toyota-profit-outlook-weak-yen-tariffs",
    category: "Business",
    title: "Toyota raises profit outlook and unveils $6.3 billion buyback as weak yen offsets tariffs",
    summary:
      "Toyota lifted its full-year operating profit outlook by more than 10% to ¥3.4 trillion and unveiled a ¥1 trillion ($6.3 billion) share buyback, as a weaker yen and resilient hybrid vehicle demand helped offset the continued drag from US tariffs, elevated oil prices and supply disruptions. Quarterly net profit rose more than 75% from a year earlier. The results illustrate how the same currency and geopolitical forces roiling global markets this week — the weak yen, tariff policy, and Middle East-driven oil costs — are flowing directly through to corporate earnings in one of the world's largest industries.",
    detail: [
      "Toyota raised its full-year operating profit outlook by more than 10% to ¥3.4 trillion for the fiscal year through March 2027 and announced a ¥1 trillion ($6.3 billion) share buyback, as resilient global demand for hybrid vehicles and a weaker yen helped the automaker absorb rising costs from US tariffs, elevated oil prices and ongoing supply-chain disruptions.",
      "Net profit for the April-June quarter rose more than 75% from the same period a year earlier, beating market expectations, even as the company continues to face a multibillion-dollar annual hit from US auto tariffs that has turned its North American operations into a source of strain rather than pure profit this fiscal year.",
      "The weak yen has been a direct offset: a depreciated currency inflates the yen value of Toyota's overseas earnings, providing what analysts have described as a significant earnings respite from tariffs and war-linked cost pressures, even as the same currency weakness has fed imported inflation elsewhere in the Japanese economy.",
      "Toyota's results echo a pattern across Japan's major automakers this year, with the sector as a whole absorbing a combined multibillion-dollar hit to operating income from US tariffs even as several manufacturers, including Toyota and Honda, have posted stronger-than-expected quarterly profits on the back of strong vehicle sales and currency tailwinds.",
      "The results land in the same week that the US and Japan carried out coordinated intervention to prop up the yen after it hit a 40-year low — meaning Toyota's currency tailwind could narrow if that intervention succeeds in meaningfully strengthening the yen going forward, adding a layer of uncertainty to the company's own upgraded guidance.",
      "As one of the world's largest automakers by revenue and vehicle volume, Toyota's results function as a bellwether for how the global auto industry is navigating the combination of US tariff policy, currency swings and elevated energy costs simultaneously, with implications for suppliers, competitors and consumers across multiple markets.",
    ],
    keywords: [
      "Toyota",
      "Tariffs",
      "Japanese Yen",
      "Automakers",
      "Earnings",
      "Share Buyback",
      "Supply Chain",
    ],
    date: "2026-08-06",
    sources: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/toyota-unveils-6-3-billion-buyback-raises-profit-outlook-earnings-auto",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/automobiles/toyota-revises-full-year-net-profit-forecast-upward-helped-by-weak-yen",
      },
    ],
    crossCheck: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/articles/2026-08-04/toyota-unveils-6-3-billion-buyback-raises-profit-outlook-earnings-auto",
      },
      {
        outlet: "Nikkei Asia",
        url: "https://asia.nikkei.com/business/automobiles/toyota-revises-full-year-net-profit-forecast-upward-helped-by-weak-yen",
      },
    ],
    selectionRationale:
      "A bellwether global automaker's earnings directly showing how this week's currency, tariff and energy-price dynamics are flowing through to corporate results across a major industry (PRD §5-1/§5-2).",
  },
];

// Plan Ref: PLAN.md step 9 — runs at module-load time, so `next build` and
// `next dev` both fail loudly if the data violates PRD's numeric/whitelist rules.
validateIssues(issues);

export function latestDate(data: Issue[] = issues): string {
  return data.reduce((max, issue) => (issue.date > max ? issue.date : max), data[0].date);
}

export function issuesForLatestDate(data: Issue[] = issues): Issue[] {
  const date = latestDate(data);
  return data.filter((issue) => issue.date === date);
}

export function getFeaturedIssue(data: Issue[] = issues): Issue | undefined {
  return issuesForLatestDate(data).find((issue) => issue.featured);
}

export function findIssue(
  category: string,
  slug: string,
  data: Issue[] = issues
): Issue | undefined {
  return data.find(
    (issue) =>
      issue.slug === slug && issue.category.toLowerCase() === category.toLowerCase()
  );
}
