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
