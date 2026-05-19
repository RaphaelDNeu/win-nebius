/*
 * content.js
 *
 * Single source of slide copy for the deck. Headlines, fragments,
 * numbers, and speaker notes live here. Layout and styling are in
 * /css/theme.css and /js/archetypes.js.
 *
 * Each slide has:
 *   id        unique slug, used as the DOM id of the section
 *   archetype one of: title, statement, image, data, cards, imagedata,
 *             thesis, diagram, timeline, logos
 *   orient    optional small corner-of-slide label, e.g. '02 / china'
 *             (omit on title, divider, and full-bleed image slides)
 *   data      archetype-specific payload (see archetypes.js)
 *   notes     speaker notes, surfaced via reveal speaker view (press 's').
 *             Use '\n' between bullets; the renderer converts them to
 *             <br> so they read as bullets in the presenter window.
 *
 * Deal-section slides (11 to 16) are placeholders and arrive in a later
 * prompt; their bracketed copy stays until then.
 */

window.DECK_CONTENT = {
  meta: {
    presenter: 'Raphael Neuhaus',
    role: 'Account Executive, Benelux',
    company: 'Nebius',
    date: '22 May 2026'
  },

  slides: [
    /* ================================================================ */
    /* 1. Title                                                         */
    /* ================================================================ */
    {
      id: 'slide-01-title',
      archetype: 'title',
      data: {
        eyebrow: 'Nebius Benelux interview',
        title: 'Raphael Neuhaus',
        subtitle: 'Account Executive, Benelux',
        meta: '22 May 2026',
        showLogo: true
      },
      notes:
        '• Ten seconds. Let the panel read the name and role.\n' +
        '• No talking over the open. Then move to slide 2.'
    },

    /* ================================================================ */
    /* 2. The Benelux market, by name (logos)                           */
    /* ================================================================ */
    {
      id: 'slide-02-benelux-by-name',
      archetype: 'logos',
      orient: '01 / benelux',
      data: {
        headline: 'The Benelux market, by name',
        logos: [
          { name: 'Booking.com', src: 'images/logos/booking.svg',  sub: 'Booking.com', accent: 'white' },
          { name: 'Adyen',       src: 'images/logos/adyen.svg',    sub: 'Adyen',       accent: 'white' },
          { name: 'TomTom',      src: 'images/logos/tomtom.svg',   sub: 'TomTom',      accent: 'white', size: 'lg' },
          { name: 'Weaviate',    src: 'images/logos/weaviate.svg', sub: 'Weaviate',    accent: 'lime'  }
        ]
      },
      notes:
        '• Booking runs 480 ML models and 400B predictions a day.\n' +
        '• Adyen is building a 1.4B-parameter foundation model on its transaction corpus.\n' +
        '• TomTom runs continuous training across Orbis Maps.\n' +
        '• Weaviate is the Index portfolio overlap: vector-database leader, AI-native customer, warm path through Index partner level.\n' +
        '• I know the named person at each. For several I already have a warm path.\n' +
        '• That is why I am in this room.'
    },

    /* ================================================================ */
    /* 3. Where I have operated (cards)                                 */
    /* ================================================================ */
    {
      id: 'slide-03-where-operated',
      archetype: 'cards',
      orient: '01 / benelux',
      data: {
        headline: 'Where I have operated',
        equalHeight: true,
        cards: [
          {
            headline: 'Palo Alto Networks',
            logoSrc: 'images/logos/paloalto.svg',
            accent: 'lime',
            lines: [
              'Enterprise security, complex multi-stakeholder cycles',
              'Century Club, DACH and Benelux territories'
            ]
          },
          {
            headline: 'Google Cloud',
            logoSrc: 'images/logos/googlecloud.svg',
            accent: 'purple',
            lines: [
              'AI-infrastructure deals with Benelux digital natives',
              'New-logo hunting, plus the EMEA VC program I built.'
            ]
          },
          {
            headline: 'Nexos.ai',
            logoSrc: 'images/logos/nexos.png',
            accent: 'lime',
            lines: [
              'Founding GTM lead, selling AI infrastructure today',
              'Hands-on with the buyer Nebius is also chasing'
            ]
          }
        ]
      },
      notes:
        '• PAN: Century Club years, enterprise security cycles across DACH and Benelux.\n' +
        '• Google Cloud: quota-carrying AE on digital natives and AI-natives; VC program was a side build that became EMEA-wide.\n' +
        '• 8 published Google Cloud case studies in back pocket, plus several more from startup-program companies I sourced into Google Cloud, several with seven-figure ARR.\n' +
        '• Mention "I can walk you through the case studies after this conversation" if the panel asks for proof.\n' +
        '• One line on Aivira, the voice AI company I co-founded; that is where I learned what building from zero actually costs.\n' +
        '• Aivira stays in notes only; never name it on the slide.'
    },

    /* ================================================================ */
    /* 4. The VC community I built (imagedata, 4 stats + 4 photos)      */
    /* ================================================================ */
    {
      id: 'slide-04-vc-community',
      archetype: 'imagedata',
      orient: 'Google Cloud',
      data: {
        headline: 'The VC community I built',
        stats: [
          { value: '25+', unit: 'VC firms', label: 'active partnerships' },
          { value: '€3M+', unit: 'pipeline', label: 'sourced through VC relationships' },
          { value: '1,000+', unit: 'senior leaders', label: 'across 20+ events' },
          { value: '3', unit: 'EMEA regions', label: 'adopted the playbook' }
        ],
        images: [
          { src: 'images/photos/vc-event-1.jpg', placeholder: 'VC event photo 1' },
          { src: 'images/photos/vc-event-2.jpg', placeholder: 'VC event photo 2' },
          { src: 'images/photos/vc-event-3.jpg', placeholder: 'VC event photo 3' },
          { src: 'images/photos/vc-event-4.jpg', placeholder: 'VC event photo 4' }
        ]
      },
      notes:
        '• What I am proudest of from my Google Cloud time.\n' +
        '• Started as one program in Benelux, taken up by three EMEA regions.\n' +
        '• Bridge into the China section: community-building is a skill I started developing fifteen years ago in China.\n' +
        '• Hold the slide while delivering the bridge line, then advance.'
    },

    /* ================================================================ */
    /* 5. Section break: China                                          */
    /* ================================================================ */
    {
      id: 'slide-05-divider-china',
      archetype: 'title',
      data: {
        title: 'China',
        subtitle: 'A passion project, fifteen years in',
        showLogo: false
      },
      notes:
        '• Five-second pause on the divider.\n' +
        '• Let the panel reset before the China narrative.'
    },

    /* ================================================================ */
    /* 6. Hangzhou, full-bleed image                                    */
    /* ================================================================ */
    {
      id: 'slide-06-hangzhou',
      archetype: 'image',
      data: {
        src: 'images/hangzhou-skyline.jpg',
        fullBleed: true,
        overlay: {
          logoSrc: 'images/logos/deepseek.svg',
          label: 'DeepSeek'
        },
        placeholder: 'Full-bleed Hangzhou photo with the DeepSeek mark'
      },
      notes:
        '• DeepSeek dropped during Chinese New Year while I was in China.\n' +
        '• Followed it through Western media over the weekend; Mandarin reading is not strong enough for the Chinese-language coverage. West woke up on Monday.\n' +
        '• Spoke with a friend in Shenzhen at Tencent to triangulate.\n' +
        '• Use this as the hook for the origin story: rural China at 19, German volunteer programme.'
    },

    /* ================================================================ */
    /* 7. Teaching, full-bleed image                                    */
    /* ================================================================ */
    {
      id: 'slide-07-teaching',
      archetype: 'image',
      data: {
        src: 'images/photos/teaching-rural-china.png',
        fullBleed: true,
        placeholder: 'Full-bleed teaching photo, rural Chinese classroom'
      },
      notes:
        '• Sixty seconds, deliberately.\n' +
        '• Volunteer post on the German government programme, then the promotion.\n' +
        '• Seminars for other volunteers.\n' +
        '• Name a village or province if it adds texture; do not dwell beyond a minute.\n' +
        '• Earns the room emotionally; use sparingly.'
    },

    /* ================================================================ */
    /* 8. How I keep studying China (source logos)                      */
    /* ================================================================ */
    {
      id: 'slide-08-how-i-keep-studying',
      archetype: 'logos',
      orient: '02 / china',
      data: {
        headline: 'How I keep studying China',
        logos: [
          { name: 'Sinica',        src: 'images/logos/sinica.png',    sub: 'Podcast, Kaiser Kuo',  accent: 'white' },
          { name: 'ChinaTalk',     src: 'images/logos/chinatalk.png', sub: 'Newsletter and podcast', accent: 'white' },
          { name: 'The Economist', src: 'images/logos/economist.svg', sub: 'Drum Tower podcast',   accent: 'white' },
          { name: 'WeChat',        src: 'images/logos/wechat.svg',    sub: 'WeChat',               accent: 'white' },
          { name: 'Air China',     src: 'images/logos/airchina.svg',  sub: 'Going back regularly', accent: 'white' }
        ]
      },
      notes:
        '• Framed as groundwork for a long-term venture, not hobby content.\n' +
        '• Read these every week; conversational Chinese, and I go back regularly.\n' +
        '• Air China on the slide is the visual cue for "I go back regularly," not a metaphor.\n' +
        '• Long-term plans to build something in or with China; laying the groundwork now.'
    },

    /* ================================================================ */
    /* 9. The AI race is an energy race (thesis)                        */
    /* ================================================================ */
    {
      id: 'slide-09-energy-race',
      archetype: 'thesis',
      orient: '02 / china',
      data: {
        headline: 'The AI race is an energy race',
        columns: [
          {
            label: 'A. The electron gap',
            hero: {
              value: '429 GW',
              unit: '',
              label: 'added by China to its grid in 2024, roughly seven times what the US added the same year.'
            },
            lines: [
              'The real constraint is electricity, not chips.',
              '~400 GW projected spare Chinese capacity by 2030, roughly 3x global datacenter demand (Goldman).',
              'US demand flat for two decades, now cannot permit fast enough.'
            ]
          },
          {
            label: 'B. Tokens as a power derivative',
            hero: {
              value: 'Week of Feb 9, 2026',
              unit: '',
              label: 'Chinese models crossed US models in weekly token usage on OpenRouter, 4.1T vs 2.9T.'
            },
            lines: [
              'Power is 60-70% of model operating cost (Changjiang Securities).',
              'Electricity is hard to export. Tokens are not.',
              'The transferable signal: I notice the constraint others miss.'
            ]
          }
        ]
      },
      notes:
        '• 429 GW is the IEA/NEA consensus number for net new grid-connected capacity in CY2024 (21% YoY): ~277 GW solar, ~80 GW wind, ~30 GW coal, rest hydro/nuclear/gas. US added ~62.8 GW the same year (EIA), so 429/62.8 = ~6.8x, which rounds honestly to "roughly seven."\n' +
        '• If anyone challenges with the higher 543 GW figure: that is the "installed nameplate" number including projects built but not yet grid-connected. 429 is the IEA-aligned, defensible one.\n' +
        '• ~400 GW spare Chinese capacity by 2030: Goldman Sachs, Nov 2025, vs ~120 GW global data-center demand, hence 3x. They also project China spare at 25% of peak summer demand by 2030, US effective spare below 15% in most regions.\n' +
        '• US demand was flat for two decades; cannot permit fast enough now (interconnect queues, transformer lead times).\n' +
        '• Power is 60-70% of model operating cost: attribute to Changjiang Securities. Epoch AI bottom-up cost model corroborates ~67% of OpEx. Be careful: this is OPERATING cost, not TCO. Of TCO, power is only ~7% because servers dominate CapEx at 60%. If challenged on that, agree, and reframe: at steady-state inference, power dominates.\n' +
        '• OpenRouter crossover: week of Feb 9-15, 2026, Chinese models 4.12T tokens vs US models 2.94T. Following week, 5.16T vs 2.7T. By late Feb, Chinese models ~61% of OpenRouter top-10 token consumption. Top Chinese names: MiniMax M2.5, Moonshot Kimi K2.5, Zhipu GLM-5, DeepSeek V3.2.\n' +
        '• Electricity is hard to export. Tokens are not. China keeps the electrons, exports the value as inference.\n' +
        '• Position with conviction. Ready for Q and A on Goldman, NEA, OpenRouter, Changjiang figures.'
    },

    /* ================================================================ */
    /* 10. Navigating uncharted territory with no map (statement)       */
    /* ================================================================ */
    {
      id: 'slide-10-uncharted-territory',
      archetype: 'statement',
      orient: '02 / china',
      data: {
        headline: 'Navigating uncharted territory with no map',
        sub: 'An unfamiliar market, no playbook, thriving where others dropped out. The blueprint for every hard market since.',
        accent: true
      },
      notes:
        '• Grit evidence:\n' +
        '   • Created an advanced class for the strongest students; spoken English and German improved faster under me.\n' +
        '   • Promoted in a programme where volunteers regularly washed out.\n' +
        '   • Sent back to China by the German ministry to train other volunteers, on government money, without the formal qualification the role normally required.\n' +
        '• Same instinct applied to every hard market since.\n' +
        '• Spoken bridge from here into the deal section.'
    },

    /* ================================================================ */
    /* 11-16. Deal case study (PLACEHOLDERS, content arrives later)     */
    /* ================================================================ */
    {
      id: 'slide-11-divider-deal',
      archetype: 'title',
      data: {
        title: 'The deal',
        subtitle: 'A case study, the kind of cycle relevant for Nebius',
        showLogo: false
      },
      notes:
        '• Five-second pause.\n' +
        '• Frame the subtitle as the bridge: this is not the most recent deal, it is the most relevant one for what we are talking about.\n' +
        '• [PLACEHOLDER section; deal copy lands in a later prompt after the meeting with old colleague.]'
    },

    {
      id: 'slide-12-deal-found-account',
      archetype: 'statement',
      orient: '03 / deal',
      data: {
        headline: 'I found a major account no one was looking at',
        sub: 'CM.com, a listed payments company in Breda with no Google Cloud footprint. Not on any target list. I opened it net-new while holding the territory\u2019s largest fintech accounts.',
        accent: true
      },
      notes:
        '• This deal started because I went looking. CM.com was not on any account list I was handed. It is a publicly listed Dutch payments and conversational-commerce company in Breda, and at the time it had effectively no Google Cloud footprint.\n' +
        '• I identified it as a serious prospect and opened it from zero, net-new.\n' +
        '• The context: I was holding the largest fintech accounts in the Benelux territory, a senior fill-in role I was entrusted with before I had proven myself in it. I treated that as a mandate to hunt, not just to maintain.\n' +
        '• Honest framing up front: I originated this and built it to a first production workload, then handed it over in a territory change before the larger commitment resolved. Both halves are true and I will be straight about both.'
    },

    {
      id: 'slide-13-deal-engineers-buried',
      archetype: 'cards',
      orient: '03 / deal',
      data: {
        headline: 'Strong engineers, buried in their own infrastructure',
        cards: [
          {
            headline: 'On paper',
            accent: 'lime',
            lines: [
              'Already running Kubernetes on-prem',
              'Technically sophisticated, cloud-native patterns'
            ]
          },
          {
            headline: 'In reality',
            accent: 'purple',
            lines: [
              'Whole teams consumed keeping infrastructure alive',
              'Night shifts, weekend on-call, constant firefighting'
            ]
          }
        ]
      },
      notes:
        '• The problem here was not a lack of sophistication. These were strong, technically sophisticated engineers, already running Kubernetes themselves on their own infrastructure.\n' +
        '• The problem was operational burden. A large part of the engineering organization spent its time keeping infrastructure alive instead of building product.\n' +
        '• Night shifts, weekend on-call, constant firefighting.\n' +
        '• So the case I built was not "move to the cloud." They were already cloud-native in their patterns. The case was managed infrastructure: let Google run the Kubernetes control plane and the databases, and give those engineers back to product.\n' +
        '• As Frank, who later took the account, put it: they spent their energy on how to build it and keep it running, instead of on value-add. That was the wedge.'
    },

    {
      id: 'slide-14-deal-cold-outreach',
      archetype: 'timeline',
      orient: '03 / deal',
      data: {
        headline: 'Cold outreach to a live landing zone',
        items: [
          {
            date: 'Open',
            text: 'Outbound with my BDR, opened at CISO and CTO level.',
            accent: 'lime'
          },
          {
            date: 'Win',
            text: 'First meeting on Kubernetes, brought in a customer engineer.',
            accent: 'purple'
          },
          {
            date: 'Fund',
            text: 'Secured 10k in credits against internal pushback, stood up the landing zone.',
            accent: 'lime'
          },
          {
            date: 'Build',
            text: 'Built the champion from zero, weekly and hands-on.',
            accent: 'purple'
          }
        ],
        footer: 'Net-new account from zero to a live Google Cloud landing zone.'
      },
      notes:
        '• I ran outbound into the account with my BDR, Nicky, and we did not start low. We opened at CISO and CTO level. Starting that senior shaped everything that followed; it meant the cloud conversation had altitude from day one.\n' +
        '• I won the first technical meeting on a shared interest in Kubernetes, and brought in our customer engineer, Qian Sun, as the dedicated technical resource.\n' +
        '• I secured ten thousand in Google Cloud credits to fund the proof of concept, and had to fight for those internally against skepticism about an unproven greenfield account.\n' +
        '• I created CM.com\u2019s first Google Cloud account and helped stand up the landing zone: billing and governance structure, IAM, networking back to their on-prem estate.\n' +
        '• I built the champion. Bas Peters, who ran payments engineering, went from no cloud experience to running a production workload, through weekly hands-on sessions with me.\n' +
        '• I also connected them to Xebia, the Google value-added partner, for delivery capacity.\n' +
        '• The orchestration was mine. The deep technical build was Qian\u2019s. I am precise about that line because it matters.'
    },

    {
      id: 'slide-15-deal-coalition',
      archetype: 'cards',
      orient: '03 / deal',
      data: {
        headline: 'A coalition, not a single point of contact',
        cards: [
          {
            headline: 'The CISO',
            accent: 'lime',
            lines: [
              'Technical door-opener',
              'Kubernetes interest convened the first meetings'
            ]
          },
          {
            headline: 'The champion',
            accent: 'lime',
            lines: [
              'Software Development Manager, Payments',
              'Carried the workload into production'
            ]
          },
          {
            headline: 'The customer engineer and Xebia',
            accent: 'purple',
            lines: [
              'Delivery muscle',
              'Deep technical build and partner capacity'
            ]
          },
          {
            headline: 'Up to the CEO',
            accent: 'purple',
            lines: [
              'Personalized microsites for every stakeholder',
              'CEO engaged with the content directly'
            ]
          }
        ]
      },
      notes:
        '• This was never a single-threaded deal.\n' +
        '• Sandor was the first technical contact, the one whose interest in Kubernetes opened the door and convened the early meetings.\n' +
        '• Bas Peters became the champion, the person who carried the workload into production.\n' +
        '• Qian Sun and the Xebia partner were the delivery muscle that made the build real.\n' +
        '• To build consensus across the wider organization, I ran an account-based marketing campaign: personalized microsites with tailored references for individual stakeholders, including the CEO, who engaged with the content directly.\n' +
        '• The point was to make the cloud conversation something the whole company was having, not just one engineering team.\n' +
        '• Multi-threading like that is the difference between a deal that depends on one person and a deal that has its own momentum.'
    },

    {
      id: 'slide-16-deal-zero-to-production',
      archetype: 'thesis',
      orient: '03 / deal',
      data: {
        headline: 'Zero to production, then organic growth',
        columns: [
          {
            label: 'Peak run rate',
            hero: {
              value: '~\u20AC1M / year',
              unit: '',
              label: 'after handover, as teams replicated the model'
            }
          },
          {
            label: 'Production payment traffic',
            hero: {
              value: '\u20AC90k / month',
              unit: '',
              label: 'on GKE and Cloud SQL, Dutch Grand Prix workloads live within months'
            }
          }
        ]
      },
      notes:
        '• The first workload into production was a bounded payment workflow, the credit card acceptance flow, on Google Kubernetes Engine with a managed Cloud SQL database, integrated back into their existing on-prem payment systems.\n' +
        '• It was deliberately bounded: meaningful and customer-facing, but contained enough to survive internally and prove the model.\n' +
        '• Within months, real production payment traffic tied to the Dutch Grand Prix at Zandvoort was running on it.\n' +
        '• After I handed the account over, it grew organically, and that is the point I want to make. The foundation was sound enough that it kept compounding without me. Team after team saw it worked, saw the on-call burden disappear, and replicated the model.\n' +
        '• The run rate eventually peaked around ninety thousand euros a month, roughly one million annualized.\n' +
        '• I originated it and built the foundation. The growth to that peak happened after me, and I would not claim otherwise.'
    },

    {
      id: 'slide-17-deal-economic-buyers',
      archetype: 'statement',
      orient: '03 / deal',
      data: {
        headline: 'What this deal taught me about economic buyers',
        sub: 'Beyond the live workloads, a larger \u20AC5M strategic migration was on the table, discussed at CEO and CFO level. The CFO saw the economics. The owner-CEO never let go. A champion cannot outrank an emotional economic buyer.',
        accent: true
      },
      notes:
        '• I want to end on the most useful part. There was a path to something much bigger: a strategic migration and multi-year commitment in the range of five million, discussed at CEO and CFO level.\n' +
        '• The CFO understood the economics. The business case was sound and he saw it.\n' +
        '• It did not happen, and the reason was not price, product, or a competitor. The owner and CEO had a genuine emotional attachment to running his own infrastructure. He had glass panels installed in his office floor so he could watch his own servers.\n' +
        '• The real competitor in this deal was never AWS. It was the status quo, and the status quo had a sponsor at the very top.\n' +
        '• The lesson has changed how I sell. On every enterprise deal since, I map the economic buyer\u2019s personal stake early, not just their business case.\n' +
        '• Bas was an excellent champion. He was simply never going to outrank the founder.'
    },

    /* ================================================================ */
    /* 17. Section break: Benelux territory                             */
    /* ================================================================ */
    {
      id: 'slide-18-divider-territory',
      archetype: 'title',
      data: {
        title: 'Benelux territory',
        subtitle: 'The market, the accounts, where I would start',
        showLogo: false
      },
      notes:
        '• Five seconds.\n' +
        '• This is the section the panel weights most.'
    },

    /* ================================================================ */
    /* 18. The thesis (statement)                                       */
    /* ================================================================ */
    {
      id: 'slide-19-thesis',
      archetype: 'statement',
      orient: '04 / territory',
      data: {
        headline: 'Land the digital natives first, let them open enterprise',
        sub: 'Technical merit closes Motion 1. Sovereignty and compliance carry Motion 2. Every Motion 1 win becomes a Motion 2 reference.',
        footnote: 'The wedge: a full-stack AI cloud, not bare-metal, not a general-purpose hyperscaler.',
        accent: true
      },
      notes:
        '• Q and A preparation, not slide content:\n' +
        '   • Why a full-stack AI cloud beats a hyperscaler:\n' +
        '     • Hyperscalers sell general-purpose cloud with the wrong defaults and bundled overhead.\n' +
        '     • Bare-metal GPU rental gives raw compute but no platform and no path to production.\n' +
        '     • Full-stack means we own the stack from silicon to inference endpoint, optimised end to end.\n' +
        '   • Low TCO at the inference layer is the buyer-visible outcome.\n' +
        '   • Sovereignty is the unlock with regulated buyers, not the lead with engineering buyers.\n' +
        '• On the slide: keep it short, two beats. The detail lives in the next three slides.\n' +
        '• If asked why digital natives first: shorter cycles, technical buyer, fewer committee gates, references compound into Motion 2.'
    },

    /* ================================================================ */
    /* 19. Two motions, one ecosystem (diagram)                         */
    /* ================================================================ */
    {
      id: 'slide-20-two-motions',
      archetype: 'diagram',
      orient: '04 / territory',
      data: {
        headline: 'Two motions in parallel, one ecosystem feeding both',
        motions: [
          {
            label: 'Motion 1',
            headline: 'Digital natives',
            accent: 'lime',
            lines: [
              'Engineering-led',
              'Fast cycles',
              'Close on technical merit'
            ]
          },
          {
            label: 'Motion 2',
            headline: 'Enterprise',
            accent: 'purple',
            lines: [
              'Top-down, multi-threaded',
              'Anchored by sovereignty and compliance'
            ]
          }
        ],
        band: {
          label: 'Horizontal layer feeding both',
          text: 'VC ecosystem, DevRel, and AI House Amsterdam'
        }
      },
      notes:
        '• [DRAFT]\n' +
        '• Walk the two motions left to right, then drop to the band underneath.\n' +
        '• Same ecosystem layer warms both motions; that is the structural advantage.\n' +
        '• Motion 1 closes on technical merit; engineering buyers are the wedge.\n' +
        '• Motion 2 closes on sovereignty plus compliance; committee buyers carry DORA, NIS2 and the EU AI Act.\n' +
        '• Index Ventures, DevRel, AI House do not pick a side; they make both motions cheaper to start.'
    },

    /* ================================================================ */
    /* 20. Why now (timeline)                                           */
    /* ================================================================ */
    {
      id: 'slide-21-why-now',
      archetype: 'timeline',
      orient: '04 / territory',
      data: {
        headline: 'Why now: the regulatory window is open',
        items: [
          {
            date: 'Nov 2025',
            text: 'Dutch media coalition rejects US and Chinese AI scraping.',
            accent: 'purple'
          },
          {
            date: 'Feb 2026',
            text: 'Rabobank, ABN AMRO and ING move to cut US-tech dependence.',
            accent: 'lime'
          },
          {
            date: '2026 to 2027',
            text: 'EU AI Act, DORA and NIS2 converge.',
            accent: 'purple'
          }
        ],
        footer: 'Nebius is the cleanest answer: Amsterdam-headquartered, EU data centers, Nasdaq-listed, outside the US CLOUD Act.'
      },
      notes:
        '• [DRAFT]\n' +
        '• Strongest, most specific argument in the deck; give it space.\n' +
        '• Nov 2025: Stichting Democratie en Media coordinated; every major Dutch news org signed.\n' +
        '• Feb 2026: the trilateral is the procurement signal, not a PR line.\n' +
        '• 2026 to 2027: compute that stays in Europe becomes a procurement requirement, not a nice-to-have.\n' +
        '• Footer line carries the Nebius positioning: Amsterdam HQ, Finland DC, Paris GPU cluster, Nasdaq-listed, no CLOUD Act exposure.\n' +
        '• Cleanest sovereignty story in the market; do not oversell it, the dates do the work.'
    },

    /* ================================================================ */
    /* 21. Five accounts to land first (cards)                          */
    /* ================================================================ */
    {
      id: 'slide-22-five-accounts',
      archetype: 'cards',
      orient: '04 / territory',
      data: {
        headline: 'Five accounts to land first',
        cards: [
          {
            headline: 'Booking.com',
            logoSrc: 'images/logos/booking.svg',
            accent: 'lime',
            lines: [
              '480 ML models, 400B predictions a day',
              'Personalization foundation models on the roadmap'
            ],
            tag: 'GPU, pre-training'
          },
          {
            headline: 'Adyen',
            logoSrc: 'images/logos/adyen.svg',
            accent: 'lime',
            lines: [
              '1.4B-parameter model in build',
              'Compute is the binding constraint'
            ],
            tag: 'GPU, pre-training'
          },
          {
            headline: 'TomTom',
            logoSrc: 'images/logos/tomtom.svg',
            lines: [
              'Orbis Maps, continuous training',
              'Be their European training partner'
            ],
            tag: 'GPU training and Token Factory'
          },
          {
            headline: 'Picnic and Cradle.bio',
            logoSrcs: ['images/logos/picnic.svg', 'images/logos/cradle.svg'],
            lines: [
              'Picnic trains in-house',
              'Cradle warm via the UCSF protein reference'
            ],
            tags: [
              'Picnic: GPU, in-house training',
              'Cradle.bio: Token Factory, inference'
            ]
          }
        ]
      },
      notes:
        '• [DRAFT]\n' +
        '• Only the active-cycle subset. The full list is back-pocket for live Q and A.\n' +
        '• Booking and Adyen are the structural prizes; both have compute as their binding constraint.\n' +
        '• TomTom positioned as European training partner, not displacement of an incumbent.\n' +
        '• Cradle path is the UCSF protein reference; warm intro, not cold pursuit.'
    },

    /* ================================================================ */
    /* 22. Where the references lead, four enterprise targets (cards)   */
    /* ================================================================ */
    {
      id: 'slide-23-enterprise-targets',
      archetype: 'cards',
      orient: '04 / territory',
      data: {
        headline: 'Where the references lead: four enterprise targets',
        cards: [
          {
            headline: 'KBC',
            logoSrc: 'images/logos/kbc.svg',
            accent: 'purple',
            lines: [
              'Kate serves 6M customers',
              'Agentic launch in 2026 compounds token demand'
            ],
            tag: 'Token Factory, inference'
          },
          {
            headline: 'The Dutch big three',
            logoSrcs: [
              'images/logos/rabobank.svg',
              'images/logos/abnamro.svg',
              'images/logos/ing.svg'
            ],
            accent: 'purple',
            lines: [
              'Rabobank, ABN AMRO, ING',
              'Largest uncommitted sovereign inference budget in NL'
            ],
            tag: 'Token Factory, inference'
          },
          {
            headline: 'Philips HealthSuite',
            logoSrc: 'images/logos/philips.svg',
            lines: [
              'Cloud informatics across radiology and pathology',
              'EU-residency conversation'
            ],
            tag: 'GPU retraining and Token Factory'
          },
          {
            headline: 'DPG Media and RTL',
            logoSrcs: ['images/logos/dpg.svg', 'images/logos/rtl.svg'],
            lines: [
              'Fresh post-merger stack',
              'CTO-led'
            ],
            tag: 'Token Factory, inference'
          }
        ]
      },
      notes:
        '• Frame: these are the four enterprise targets where the door is unusually wide open right now, not generic logos on a map.\n' +
        '\n' +
        'KBC\n' +
        '• Their AI assistant Kate is the most ambitious bank-built consumer agent in BeNeLux, already used by ~6M customers across retail banking and insurance.\n' +
        '• Public commitment to push Kate into agentic in 2026 (executing actions, not just answering questions) means inference volume compounds, not linear growth.\n' +
        '• Recent statements from Erik Luts and team explicitly call out the need for European AI infrastructure for data-residency reasons; this is a real budget conversation, not a sovereignty press release.\n' +
        '\n' +
        'The Dutch banks (Rabobank, ABN AMRO, ING)\n' +
        '• All three have issued joint and parallel statements through 2025-2026 about reducing dependence on US hyperscalers, partly under DORA, partly NIS2, partly Schrems II overhang.\n' +
        '• ING is the most public on AI scale; ABN AMRO is furthest on internal LLM platforms; Rabobank is the heaviest on agriculture / cooperative segments where data residency is non-negotiable.\n' +
        '• This is the single largest uncommitted sovereign inference budget in NL — they will land somewhere, and the question is whether it lands on a US-headquartered EU region or on a genuinely European stack.\n' +
        '• Multi-thread strategy: do not pitch one logo, pitch the trilateral as a category, then split the threads at the working-team level.\n' +
        '\n' +
        'Philips HealthSuite\n' +
        '• Not the entire Philips group; specifically the HealthSuite cloud informatics layer, where radiology and pathology workloads need EU-resident inference.\n' +
        '• Already has cloud governance posture, already has the regulator conversation, much shorter cycle than other Philips business units.\n' +
        '• Adjacent reference value: every other EU hospital network watches what HealthSuite does.\n' +
        '\n' +
        'DPG Media and RTL\n' +
        '• The RTL Nederland + DPG Media combination is a rare greenfield post-merger stack — the merged entity has not yet picked its long-term cloud and inference partner for content personalisation, recommendation, and the increasingly heavy LLM-assisted production workloads.\n' +
        '• CTO-led decision; the merger gives the new CTO political cover to make a structural choice rather than inherit two legacy contracts.\n' +
        '• Strong narrative fit: European media sovereignty is now a public policy theme; choosing a European inference partner is on-brand for both DPG and RTL brand-safety positioning.\n' +
        '• Pitch hook: offer to be the partner that lets them avoid renegotiating with their previous incumbent contracts side by side.'
    },

    /* ================================================================ */
    /* 23. The ecosystem layer (cards, 3 elements)                      */
    /* ================================================================ */
    {
      id: 'slide-24-ecosystem',
      archetype: 'cards',
      orient: '04 / territory',
      data: {
        headline: 'The ecosystem layer feeding both motions',
        cards: [
          {
            headline: 'VC relationships',
            accent: 'lime',
            lines: [
              'Index Ventures portfolio overlap',
              'Weaviate, DataSnipper, Tebi, Duna'
            ]
          },
          {
            headline: 'DevRel',
            lines: [
              'Technical credibility with the AI engineers who own the workloads'
            ]
          },
          {
            headline: 'AI House Amsterdam',
            accent: 'purple',
            lines: [
              'The Prosus-run hub where the Benelux AI community concentrates'
            ]
          }
        ]
      },
      notes:
        '• Warm VC path is something few competitors have.\n' +
        '• Partner-level access at Index warms introductions across multiple portfolios at once.\n' +
        '• Weaviate is the live reference: vector-database leader, AI-native, Index portfolio overlap. I have worked with them directly on case-study material.\n' +
        '• DevRel matters because the engineers we are selling to read code, not decks.\n' +
        '• AI House Amsterdam is the room where Benelux AI engineers already gather; Nebius presence there is a low-cost, high-trust signal.'
    },

    /* ================================================================ */
    /* 24. First moves (cards)                                          */
    /* ================================================================ */
    {
      id: 'slide-25-first-moves',
      archetype: 'cards',
      orient: '04 / territory',
      data: {
        headline: 'First moves',
        sub: 'Four parallel tracks, from week one',
        cards: [
          {
            headline: 'Go deep early',
            accent: 'lime',
            lines: [
              'Shadow calls, learn product and customers in depth before pitching anything'
            ]
          },
          {
            headline: 'Net-new AI workloads',
            lines: [
              'No incumbent, no migration risk, cycles fast enough to land early'
            ]
          },
          {
            headline: 'Activate the ecosystem',
            accent: 'purple',
            lines: [
              'Prosus and Index Ventures, warm intros into digital natives'
            ]
          },
          {
            headline: 'Multi-threaded outreach',
            lines: [
              'Alongside the BDR, from week one, across both motions'
            ]
          }
        ]
      },
      notes:
        '• Net-new workloads avoid switching cost and incumbent inertia; they are the wedge.\n' +
        '• Migration deals (e.g. the Picnic cost-saving story) are a later play, not the first ninety days.\n' +
        '• Ecosystem activation is cheap pipeline; the BDR runs the volume, I run the depth.\n' +
        '• Shadowing first; do not pitch what I do not yet understand.\n' +
        '• Speaker bridge into the next slide: to do this fast I need four things from Nebius.'
    },

    /* ================================================================ */
    /* 25. What I'd need to move fast (cards)                           */
    /* ================================================================ */
    {
      id: 'slide-26-what-id-need',
      archetype: 'cards',
      orient: '04 / territory',
      data: {
        headline: "What I'd need to move fast",
        cards: [
          {
            headline: 'Engineering access',
            accent: 'lime',
            lines: [
              'Learn the product by shadowing engineers, not from decks'
            ]
          },
          {
            headline: 'Reference customers',
            lines: [
              'Including the ones not yet public'
            ]
          },
          {
            headline: 'Modern GTM stack',
            lines: [
              'Tooling that lets me operate at speed'
            ]
          },
          {
            headline: "Gary's experience",
            accent: 'purple',
            lines: [
              'In the room on the largest deals'
            ]
          }
        ]
      },
      notes:
        '• On the last point: what I want from Gary is to be in the room on the largest multi-stakeholder deals and learn how a twenty-five-year veteran navigates them.\n' +
        '• Coachability and hunger to get better. Intelligent, coachable, hungry. Not a need for supervision.\n' +
        '• Engineering access is the difference between a credible AE and a brochure.\n' +
        '• Reference customers, including ones still in stealth, accelerate Motion 1 on technical merit.'
    },

    /* ================================================================ */
    /* 26. Challenges I anticipate (cards, 3 pairs)                     */
    /* ================================================================ */
    {
      id: 'slide-27-challenges',
      archetype: 'cards',
      orient: '04 / territory',
      data: {
        headline: 'Challenges I anticipate',
        sub: 'Honest read on the three things that could slow me down',
        cards: [
          {
            headline: 'Prioritisation',
            accent: 'lime',
            lines: [
              'Walk away from deals that look big but have no cycle',
              'Discipline beats coverage'
            ]
          },
          {
            headline: 'Speed to first revenue',
            lines: [
              'An early genuine win beats a perfect one',
              'Prefer Q1 signature over Q4 ideal'
            ]
          },
          {
            headline: 'Incumbent competition',
            accent: 'purple',
            lines: [
              'Compete on specialised infrastructure and proof',
              'Sovereignty alone will not carry the engineering buyer'
            ]
          }
        ]
      },
      notes:
        '• Sovereignty lands hard with the banks but is weaker elsewhere; I am honest about that.\n' +
        '• On prioritisation, the discipline is to walk away from deals that look big but have no cycle.\n' +
        '• On speed: I would rather sign a smaller deal in quarter one than a perfect deal in quarter four.\n' +
        '• On incumbents: technical proof beats sovereignty rhetoric every time with engineering buyers.\n' +
        '• Speaker bridge into closing: real workloads, real budgets, market ready to move.'
    },

    /* ================================================================ */
    /* 27. Closing (statement)                                          */
    /* ================================================================ */
    {
      id: 'slide-28-closing',
      archetype: 'statement',
      orient: '04 / territory',
      data: {
        headline: 'Real workloads, real budgets, a market ready to move',
        sub: 'Dense enough for one AE and a BDR to cover, big enough to matter.',
        accent: true
      },
      notes:
        '• Full ambition from the territory plan:\n' +
        '   • Nine accounts in active or near-term buying cycles.\n' +
        '   • Two motions in parallel feed each other through the ecosystem layer.\n' +
        '   • Why moving now matters: regulatory window is open and the AI-natives are pre-committing compute.\n' +
        '• Land calmly. Hand off to Q and A.'
    }
  ]
};
