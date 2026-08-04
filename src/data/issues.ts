// Plan Ref: PLAN.md step 4 — mock data for building the screens.
// Plan Ref: PLAN.md step 10 replaces this with real, cross-verified issues.
// Content Ref: user-provided `sample` file — 3-part structure (summary,
// multi-paragraph detail, keywords), article-length detail section.
import type { Issue } from "@/types/issue";
import { validateIssues } from "@/lib/validate-issues";

const TODAY = "2026-08-04";

export const issues: Issue[] = [
  {
    slug: "central-banks-signal-diverging-rate-paths",
    category: "Macro",
    featured: true,
    title: "Central banks signal diverging rate paths into year-end",
    summary:
      "Major central banks are increasingly diverging on the pace of interest rate cuts as year-end approaches. Policymakers have cited differing inflation trajectories, labor-market conditions, and currency pressures across regions as reasons for the split. Some banks appear to be leaning toward holding rates steady, while others are keeping further cuts on the table if growth data weakens. The divergence marks a shift from the broadly synchronized policy stance seen earlier in the cycle, with cross-border capital flows likely to be an early indicator of the split's impact.",
    detail: [
      "Financial markets are recalibrating expectations for global monetary policy as major central banks appear to be moving away from the broadly synchronized rate-cutting stance that characterized much of the past two years. Recent public remarks from policymakers in several large economies suggest that the pace and even the direction of near-term policy moves is no longer aligned, a shift that analysts say reflects genuinely different domestic conditions rather than any single global driver.",
      "At the core of the divergence is inflation. In some economies, price pressures have eased close to policy targets, giving central banks room to consider further easing without reigniting demand-driven inflation. In others, inflation has proven stickier, driven by tight labor markets, currency depreciation, or persistent services-sector cost pressures, leaving policymakers reluctant to cut further until they see more consistent progress.",
      "Labor-market conditions add another layer of complexity. Central banks that are seeing early signs of cooling employment growth have more latitude to prioritize supporting activity, while those facing continued wage pressure are wary that premature easing could undo progress on inflation. This has left rate-setting committees in different regions effectively responding to different parts of the same global cycle.",
      "The split carries implications well beyond domestic policy. Diverging rate paths tend to widen interest-rate differentials between currencies, which can drive capital flows toward economies offering relatively higher yields. That, in turn, can put depreciation pressure on the currencies of economies moving toward easier policy, complicating the inflation outlook for those same central banks.",
      "Looking ahead, investors are likely to treat each central bank's upcoming policy meeting as an independent event rather than part of a coordinated global cycle. Analysts caution that this increases the risk of volatility around individual policy announcements, since markets can no longer rely on one major central bank's decision to signal the broad direction the others will take.",
    ],
    keywords: [
      "Central Banks",
      "Interest Rates",
      "Monetary Policy",
      "Inflation",
      "Rate Cuts",
      "Currency Markets",
      "Global Economy",
    ],
    date: TODAY,
    sources: [
      { outlet: "Reuters", url: "https://www.reuters.com/markets/rates/" },
      { outlet: "Financial Times", url: "https://www.ft.com/central-banks" },
    ],
    crossCheck: [
      { outlet: "Reuters", url: "https://www.reuters.com/markets/rates/" },
      { outlet: "Financial Times", url: "https://www.ft.com/central-banks" },
    ],
    selectionRationale:
      "Policy relevance and cross-country market impact (PRD §5-1 include criteria).",
  },
  {
    slug: "trade-tension-resurfaces-over-tariff-proposals",
    category: "Macro",
    title: "Trade tension resurfaces over new tariff proposals",
    summary:
      "Officials from several major economies have reopened discussions over new tariff measures targeting specific industrial sectors. The proposals remain in an early, consultative stage, though industry groups have already begun lobbying against specific provisions. Analysts say the immediate market impact has been limited, but prolonged uncertainty tends to weigh on capital-expenditure decisions for firms with cross-border supply chains. Final terms remain unsettled, with further negotiation rounds expected before any measures take effect.",
    detail: [
      "Trade policy is back in focus after officials from several major economies confirmed that discussions over new tariff measures targeting specific industrial sectors have resumed. The talks follow a period of relative calm on the trade front and come as governments weigh competing priorities around domestic industry protection, supply-chain resilience, and consumer price stability.",
      "The proposals under discussion are reportedly narrow in scope, focused on a handful of sectors rather than a broad-based tariff regime. Even so, industry groups representing affected manufacturers and importers have already begun lobbying against specific line items, arguing that added costs would be passed on to consumers or would disadvantage firms that rely on imported components.",
      "Market reaction so far has been measured. Traders and analysts note that the proposals remain in a consultative stage, with no confirmed implementation timeline, and that similar trade discussions in the past have sometimes ended without concrete action. Still, currency and commodity markets tied to the sectors under discussion have shown modest sensitivity to headlines on the talks.",
      "The bigger concern for many businesses is not the tariffs themselves but the uncertainty they create. Companies with cross-border supply chains often delay capital-expenditure decisions until trade terms are clearer, since a shift in tariff policy can materially change the economics of where to source components or locate production.",
      "Officials involved in the discussions have signaled that further rounds of negotiation are expected before any measures are finalized, and that industry consultation will continue in the interim. Analysts expect the situation to remain fluid, with markets likely to react incrementally to news of progress or setbacks rather than treating any single headline as decisive.",
    ],
    keywords: [
      "Trade Policy",
      "Tariffs",
      "Supply Chains",
      "Global Trade",
      "Manufacturing",
      "Trade Negotiations",
    ],
    date: TODAY,
    sources: [
      { outlet: "Bloomberg", url: "https://www.bloomberg.com/trade" },
      {
        outlet: "The Wall Street Journal",
        url: "https://www.wsj.com/economy/trade",
      },
    ],
    crossCheck: [
      { outlet: "Bloomberg", url: "https://www.bloomberg.com/trade" },
      {
        outlet: "The Wall Street Journal",
        url: "https://www.wsj.com/economy/trade",
      },
    ],
    selectionRationale:
      "Affects multiple major economies and global trade policy (PRD §5-1 include criteria).",
  },
  {
    slug: "global-growth-outlook-revised-amid-employment-data",
    category: "Macro",
    title: "Global growth outlook revised amid uneven employment data",
    summary:
      "International economic bodies have revised their global growth outlooks following a batch of employment data that came in stronger in some major economies and weaker in others. Part of the divergence is attributed to uneven post-pandemic labor-market recovery across regions, with Asian export-driven economies showing more resilience than initially forecast. The net revision is described as modest rather than dramatic. Forecasters cite continued uncertainty over consumer spending and business investment as reasons for caution in either direction.",
    detail: [
      "International economic bodies have updated their global growth projections after a wave of employment data showed a mixed picture across major economies, with some labor markets outperforming expectations and others cooling faster than anticipated. The revisions, while modest in aggregate, highlight how uneven the recovery from recent economic shocks has become across regions.",
      "In several advanced economies, hiring has slowed from the brisk pace seen earlier in the cycle, raising questions about whether labor markets are undergoing an orderly cooling or something more concerning. Forecasters have generally read the data as consistent with a soft landing scenario, though they caution that the margin for error remains narrow.",
      "Export-driven economies in Asia have shown more resilience than initially forecast, supported by steady external demand and diversified trading relationships. This regional strength has partially offset softer readings elsewhere, contributing to the overall modesty of the global growth revision despite significant country-level variation.",
      "Consumer spending remains a key swing factor in the outlook. Analysts note that household balance sheets in many economies remain healthier than in prior downturns, but elevated borrowing costs and slower wage growth in some regions could weigh on discretionary spending in the coming quarters.",
      "Business investment intentions are similarly mixed, with firms in some sectors continuing to expand capacity while others adopt a wait-and-see posture amid policy and demand uncertainty. Forecasters say this divergence in investment behavior is likely to keep global growth estimates subject to further revision as more data becomes available.",
    ],
    keywords: [
      "Global Growth",
      "Employment Data",
      "Labor Market",
      "Economic Forecast",
      "Consumer Spending",
      "Business Investment",
    ],
    date: TODAY,
    sources: [
      { outlet: "The Economist", url: "https://www.economist.com/finance-and-economics" },
      { outlet: "Nikkei Asia", url: "https://asia.nikkei.com/Economy" },
    ],
    crossCheck: [
      { outlet: "The Economist", url: "https://www.economist.com/finance-and-economics" },
      { outlet: "Nikkei Asia", url: "https://asia.nikkei.com/Economy" },
    ],
    selectionRationale:
      "Long-term significance for global growth trajectory (PRD §5-1 include criteria).",
  },
  {
    slug: "equity-markets-swing-on-rate-path-uncertainty",
    category: "Markets",
    title: "Equity markets swing on rate-path uncertainty",
    summary:
      "Major equity indices saw wider-than-usual intraday swings this week as investors repriced rate-path expectations following recent central bank commentary. Rate-sensitive sectors recorded the largest moves, and trading volumes were elevated relative to recent sessions. Strategists caution that volatility could persist until upcoming policy meetings provide more clarity on the pace of further rate moves. The moves were broad-based across major markets rather than isolated to a single region.",
    detail: [
      "Equity markets experienced notably wider intraday swings this week, as investors repriced expectations for the path of interest rates following a series of comments from central bank officials. The moves were broad-based across major indices, though the magnitude varied by market and by sector exposure.",
      "Rate-sensitive sectors, including technology and real estate, recorded the largest swings, consistent with their higher sensitivity to changes in the discount rate applied to future earnings. Defensive sectors such as utilities and consumer staples were comparatively more stable, reflecting their lower correlation with rate expectations.",
      "Trading volumes were elevated relative to recent sessions, an indication that the repricing was not confined to a small group of institutional investors but reflected broader participation. Options markets also showed increased hedging activity, with implied volatility measures ticking higher across major indices.",
      "Strategists have pointed to the proximity of upcoming central bank policy meetings as a key reason for the choppy trading. With no fresh guidance expected until those meetings, markets are left to interpret incremental data releases and official commentary, a dynamic that tends to amplify short-term price swings.",
      "Looking ahead, analysts expect volatility to remain elevated in the near term, with the potential for further swings around each new data release. They note, however, that historical patterns suggest such volatility tends to moderate once policy meetings provide clearer guidance on the rate path.",
    ],
    keywords: [
      "Equity Markets",
      "Stock Market Volatility",
      "Interest Rates",
      "Trading Volume",
      "Technology Stocks",
      "Market Sentiment",
    ],
    date: TODAY,
    sources: [
      { outlet: "Reuters", url: "https://www.reuters.com/markets/equities/" },
      { outlet: "Bloomberg", url: "https://www.bloomberg.com/markets" },
    ],
    crossCheck: [
      { outlet: "Reuters", url: "https://www.reuters.com/markets/equities/" },
      { outlet: "Bloomberg", url: "https://www.bloomberg.com/markets" },
    ],
    selectionRationale:
      "Systemic market-wide impact across major indices (PRD §5-1 include criteria).",
  },
  {
    slug: "dollar-strengthens-as-bond-yields-climb",
    category: "Markets",
    title: "Dollar strengthens as bond yields climb",
    summary:
      "The dollar strengthened against a basket of major currencies this week as government bond yields climbed, a move tied to shifting expectations around the pace of future interest rate changes. The move was broad-based across G10 currency pairs, and emerging-market currencies came under additional pressure. Fixed-income strategists say the yield move reflects markets pricing in a slower path of policy easing than previously expected. The combination of a stronger dollar and higher yields has drawn particular attention from policymakers overseeing more indebted economies.",
    detail: [
      "The U.S. dollar strengthened against a basket of major currencies this week, moving in tandem with a climb in government bond yields that analysts attribute to shifting expectations for the pace of future interest rate changes. The dual move — a stronger currency alongside higher yields — is a pattern markets typically associate with reduced expectations for near-term policy easing.",
      "The dollar's gains were broad-based, extending across most G10 currency pairs rather than being concentrated against any single counterpart. Analysts noted that the move reflected a repricing of relative rate expectations rather than any single dollar-specific catalyst, with yield differentials between the U.S. and other major economies widening as a result.",
      "Emerging-market currencies came under additional pressure amid the broader dollar strength, a dynamic that tends to raise the local-currency cost of servicing dollar-denominated debt for governments and corporations in those markets. Analysts covering emerging markets flagged this as a factor worth monitoring in the weeks ahead.",
      "Fixed-income strategists said the rise in bond yields reflected markets pricing in a slower path of policy easing than had previously been expected, rather than any specific new economic data point. Longer-dated yields moved more than shorter-dated ones, consistent with a shift in expectations about the medium-term rate path rather than the very next policy decision.",
      "The combination of a stronger dollar and higher yields has drawn particular attention from policymakers overseeing more heavily indebted economies, where currency and borrowing-cost pressures can compound one another. Analysts say the situation bears watching for any signs of stress in economies with significant dollar-denominated obligations.",
    ],
    keywords: [
      "US Dollar",
      "Bond Yields",
      "Currency Markets",
      "Interest Rates",
      "Emerging Markets",
      "Fixed Income",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "The Wall Street Journal",
        url: "https://www.wsj.com/market-data/currencies",
      },
      { outlet: "Financial Times", url: "https://www.ft.com/currencies" },
    ],
    crossCheck: [
      {
        outlet: "The Wall Street Journal",
        url: "https://www.wsj.com/market-data/currencies",
      },
      { outlet: "Financial Times", url: "https://www.ft.com/currencies" },
    ],
    selectionRationale:
      "Cross-market financial risk affecting FX and bond markets (PRD §5-1 include criteria).",
  },
  {
    slug: "oil-prices-react-to-supply-policy-signals",
    category: "Markets",
    title: "Oil prices react to supply policy signals",
    summary:
      "Crude oil prices moved this week following public commentary from officials in major producing nations regarding supply policy. The immediate reaction was concentrated in futures markets, with downstream implications for Asian importers already managing tight energy budgets. Traders are watching for confirmation of any formal supply-policy change at the next scheduled meeting of producing nations. Until then, analysts are treating the move as a short-term reaction rather than a confirmed shift in output strategy.",
    detail: [
      "Crude oil prices moved notably this week after officials from major producing nations offered public commentary widely interpreted as signaling a potential shift in supply policy. The immediate reaction played out in futures markets, where traders adjusted positions ahead of any formal confirmation of a policy change.",
      "The commentary did not amount to a formal announcement, and officials stopped short of committing to specific production changes. Even so, markets treated the remarks as a meaningful signal given the track record of similar commentary preceding actual policy shifts in the past.",
      "Downstream, the price move carries direct implications for energy-importing economies, particularly in Asia, where several governments are already managing tight energy budgets amid broader fiscal pressures. Higher crude costs feed through to import bills, refined fuel prices, and, in some cases, subsidy programs that governments use to cushion consumers from price swings.",
      "Analysts covering the producer group noted that formal confirmation of any supply-policy change is unlikely before the next scheduled meeting of producing nations, and that markets are likely to remain sensitive to further commentary in the interim. Positioning data suggests traders are already adjusting exposure in anticipation of that meeting.",
      "Until a formal decision is confirmed, analysts are broadly characterizing the current price move as a short-term reaction to commentary rather than confirmation of a durable shift in output strategy, though they caution that sentiment in oil markets can shift quickly around scheduled producer meetings.",
    ],
    keywords: [
      "Oil Prices",
      "Crude Oil",
      "Energy Markets",
      "Commodities",
      "Supply Policy",
      "Energy Imports",
    ],
    date: TODAY,
    sources: [
      { outlet: "Reuters", url: "https://www.reuters.com/markets/commodities/" },
    ],
    crossCheck: [
      { outlet: "Reuters", url: "https://www.reuters.com/markets/commodities/" },
      { outlet: "Nikkei Asia", url: "https://asia.nikkei.com/Business/Energy" },
    ],
    selectionRationale:
      "Global commodity market with wide economic ripple effects (PRD §5-1 include criteria).",
  },
  {
    slug: "major-chipmakers-report-capacity-expansion-plans",
    category: "Business",
    title: "Major chipmakers report capacity expansion plans",
    summary:
      "Leading semiconductor firms have outlined new fabrication-capacity investments tied to sustained demand from AI-related computing workloads. The scale of planned capital expenditure is notable relative to prior years, and the new facilities span a range of geographies alongside various policy incentives. The expansion plans span multi-year timelines and remain subject to permitting and supply-chain constraints for specialized equipment. Industry watchers see the investments as a signal of confidence in the durability of AI-driven demand.",
    detail: [
      "Several of the world's leading semiconductor manufacturers have outlined significant new fabrication-capacity investments, which industry analysts tie directly to sustained demand from AI-related computing workloads. The scale of the planned capital expenditure marks a notable step-up relative to prior investment cycles in the industry.",
      "The new facilities are geographically diverse, spanning multiple regions as companies balance considerations around cost, talent availability, and government incentive programs designed to attract advanced manufacturing investment. Several governments have offered subsidies or tax incentives specifically aimed at semiconductor capacity, which appear to be factoring into site-selection decisions.",
      "Demand for advanced chips used in AI training and inference has been a central driver of the expansion plans, with company executives pointing to order backlogs and long-term supply agreements as justification for the scale of investment. Analysts note that this represents a bet on the durability of AI-related demand over a multi-year horizon rather than a response to near-term order books alone.",
      "The expansion plans are structured across multi-year timelines, reflecting the long lead times involved in building and equipping advanced semiconductor fabrication facilities. Executives have cautioned that timelines remain subject to permitting processes and to the availability of specialized manufacturing equipment, which is itself supplied by a concentrated group of vendors.",
      "Industry watchers view the scale of the announced investments as a signal of confidence among chipmakers that AI-driven demand will remain durable rather than a short-term spike. At the same time, analysts note that the capital intensity of these projects raises the stakes if demand growth were to slow before the new capacity comes online.",
    ],
    keywords: [
      "Semiconductors",
      "AI Demand",
      "Chipmakers",
      "Capital Expenditure",
      "Manufacturing",
      "Technology Industry",
      "Supply Chains",
    ],
    date: TODAY,
    sources: [
      { outlet: "Bloomberg", url: "https://www.bloomberg.com/technology" },
      {
        outlet: "The New York Times",
        url: "https://www.nytimes.com/section/technology",
      },
    ],
    crossCheck: [
      { outlet: "Bloomberg", url: "https://www.bloomberg.com/technology" },
      {
        outlet: "The New York Times",
        url: "https://www.nytimes.com/section/technology",
      },
    ],
    selectionRationale:
      "Structural industry shift with global supply-chain relevance (PRD §5-1 include criteria).",
  },
  {
    slug: "automakers-adjust-supply-chains-amid-cost-pressure",
    category: "Business",
    title: "Automakers adjust supply chains amid input cost pressure",
    summary:
      "Major automakers are restructuring supplier agreements in response to sustained input cost pressure. North American manufacturers are renegotiating multi-year parts contracts, while Asian suppliers are adapting their pricing and sourcing strategies in response. The companies involved are framing the restructuring as a cost-management measure rather than a change in overall production volumes. The moves reflect broader pressure across the auto industry to protect margins amid elevated input costs.",
    detail: [
      "Major automakers are restructuring supplier agreements as sustained input cost pressure continues to squeeze margins across the industry. The changes span multiple regions, with manufacturers renegotiating contract terms that in some cases had been locked in for multiple years under different cost assumptions.",
      "In North America, several manufacturers are renegotiating multi-year parts contracts directly with suppliers, seeking either price concessions or adjusted terms that share input cost risk more evenly between automaker and supplier. Industry analysts describe this as a departure from the fixed-price arrangements that were more common in prior years.",
      "Asian suppliers, meanwhile, are adapting their own pricing and sourcing strategies in response, in some cases diversifying their raw-material sourcing to reduce exposure to volatile input costs. Several suppliers have also indicated they are reassessing production locations to better manage currency and logistics costs.",
      "Companies involved in the restructuring have been careful to frame the changes as a cost-management measure rather than a signal of reduced production volumes, with several manufacturers reaffirming existing output targets even as they renegotiate supplier terms. Analysts broadly view the moves as defensive rather than a sign of weakening demand.",
      "The restructuring reflects broader pressure across the auto industry to protect margins amid elevated input costs, including raw materials and logistics. Analysts expect further contract renegotiations across the sector as companies continue to adjust to a cost environment that differs meaningfully from the one in which many existing agreements were originally signed.",
    ],
    keywords: [
      "Automakers",
      "Supply Chains",
      "Input Costs",
      "Manufacturing",
      "Auto Industry",
      "Supplier Contracts",
    ],
    date: TODAY,
    sources: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/business",
      },
    ],
    crossCheck: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/business/",
      },
      {
        outlet: "South China Morning Post",
        url: "https://www.scmp.com/business",
      },
    ],
    selectionRationale:
      "Supply-chain restructuring with cross-industry implications (PRD §5-1 include criteria).",
  },
  {
    slug: "cross-border-ma-activity-picks-up-in-energy-sector",
    category: "Business",
    title: "Cross-border M&A activity picks up in energy sector",
    summary:
      "Cross-border merger and acquisition activity among energy firms has picked up as companies reposition their portfolios for a lower-carbon transition. Several of the larger deals are facing environmental and regulatory scrutiny, and valuation multiples for renewable-generation assets have diverged notably from those of traditional fossil-fuel assets. Deal activity remains concentrated among a small number of large, well-capitalized players rather than being broad-based across the sector. Analysts expect the trend to continue as companies seek scale in renewable generation.",
    detail: [
      "Cross-border merger and acquisition activity among energy companies has picked up in recent weeks, as firms reposition their asset portfolios to align with an accelerating lower-carbon transition. The deals span both traditional energy producers seeking exposure to renewables and specialized renewable developers seeking scale and access to new markets.",
      "Several of the larger transactions announced recently are facing heightened environmental and regulatory scrutiny, reflecting growing government attention to foreign ownership of energy assets and to the climate implications of major industry consolidation. Regulators in multiple jurisdictions have signaled they will review the deals closely before granting approval.",
      "Valuation multiples for renewable-generation assets have diverged notably from those applied to traditional fossil-fuel assets, with buyers willing to pay a premium for established renewable portfolios given the long-term revenue visibility such assets typically offer. Advisers involved in the deals say this valuation gap has become a defining feature of energy-sector dealmaking.",
      "Despite the increase in deal announcements, activity remains concentrated among a relatively small number of large, well-capitalized players capable of absorbing the scale and complexity of cross-border energy transactions. Smaller companies have been comparatively less active, constrained by financing costs and more limited access to capital.",
      "Analysts expect the trend toward consolidation to continue as companies seek scale in renewable generation and look to diversify away from legacy fossil-fuel assets. They caution, however, that regulatory review timelines could slow the pace at which announced deals ultimately close.",
    ],
    keywords: [
      "Mergers and Acquisitions",
      "Energy Sector",
      "Renewable Energy",
      "Cross-Border Deals",
      "Energy Transition",
      "Regulatory Review",
    ],
    date: TODAY,
    sources: [
      { outlet: "The Guardian", url: "https://www.theguardian.com/business/energy" },
      { outlet: "Financial Times", url: "https://www.ft.com/energy" },
    ],
    crossCheck: [
      { outlet: "The Guardian", url: "https://www.theguardian.com/business/energy" },
      { outlet: "Financial Times", url: "https://www.ft.com/energy" },
    ],
    selectionRationale:
      "Structural industry change with cross-border economic relevance (PRD §5-1 include criteria).",
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
