/*
 * content.js
 *
 * This file is the single source of slide copy for the deck.
 * Every headline, bullet, number, caption, and speaker note lives here.
 * Layout and styling stay in /css/theme.css and /js/archetypes.js.
 *
 * To edit the deck, change values in this file only. The slide objects
 * are consumed by /js/archetypes.js and rendered into reveal.js sections.
 *
 * Each slide has:
 *   id        unique slug, used as the DOM id of the section
 *   archetype one of: title, statement, image, data, cards, imagedata,
 *             thesis, diagram, timeline, logos
 *   data      the archetype-specific payload (see archetypes.js)
 *   notes     optional speaker notes string, surfaced via reveal speaker view
 *
 * Section 3 slides are placeholders. Replace the bracketed copy when
 * the deal case study is finalized.
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
    /* Opening                                                          */
    /* ================================================================ */
    {
      id: 'slide-0-title',
      archetype: 'title',
      data: {
        eyebrow: 'Nebius Benelux interview',
        title: 'Raphael Neuhaus',
        subtitle: 'Account Executive, Benelux',
        meta: '22 May 2026',
        showLogo: true
      },
      notes: 'Opening slide, ten seconds. Let the panel see the name and role. Move on.'
    },

    /* ================================================================ */
    /* Section 1: Intro                                                 */
    /* ================================================================ */
    {
      id: 'slide-1-1-ready-benelux',
      archetype: 'logos',
      data: {
        eyebrow: 'Section 1, ready in the Benelux',
        headline: 'I know who to call at each of these.',
        logos: [
          { name: 'Booking.com', accent: 'white' },
          { name: 'Adyen', accent: 'white' },
          { name: 'TomTom', accent: 'white' },
          { name: 'Weaviate', accent: 'lime' }
        ]
      },
      notes: 'Booking.com runs 480 ML models and 400 billion predictions a day. Adyen is pre-training a 1.4B parameter foundation model on its transaction corpus. TomTom runs continuous training and inference across their entire Orbis Maps platform. I know which person at each of those companies I would call first, and which of them I already have a path to. That is why I am in this room.'
    },

    {
      id: 'slide-1-2-where-operated',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 1, where I have operated',
        headline: 'Three companies, one through-line.',
        cards: [
          {
            headline: 'Palo Alto Networks',
            lines: [
              'Enterprise security, complex multi-stakeholder cycles.',
              'Closed deals across DACH and Benelux mid-market and enterprise.'
            ]
          },
          {
            headline: 'Google Cloud',
            lines: [
              'Built the EMEA VC program from zero.',
              'Drove startup signups and seeded the warm-intro engine I still use.'
            ]
          },
          {
            headline: 'Nexos.ai',
            lines: [
              'Founding GTM lead, enterprise AI orchestration.',
              'Selling AI infrastructure into DACH and Benelux mid-market and enterprise today.'
            ]
          }
        ]
      },
      notes: 'Brief headline accomplishment for each. The point is the through-line, not the resume. Full-stack across security, cloud, and AI infrastructure, with both enterprise and zero-to-one motions on the record.'
    },

    {
      id: 'slide-1-3-vc-numbers',
      archetype: 'imagedata',
      data: {
        eyebrow: 'Section 1, the VC community',
        stats: [
          { value: '25+', unit: 'VC firms', label: 'in active partnership' },
          { value: '$3M+', unit: 'pipeline', label: 'sourced through VC relationships' },
          { value: '1,000+', unit: 'people', label: 'community at peak' }
        ],
        images: [
          { src: 'images/vc-event-1.jpg', placeholder: 'VC event photo 1' },
          { src: 'images/vc-event-2.jpg', placeholder: 'VC event photo 2' },
          { src: 'images/vc-event-3.jpg', placeholder: 'VC event photo 3' },
          { src: 'images/vc-event-4.jpg', placeholder: 'VC event photo 4' }
        ]
      },
      notes: 'One of the things I am most proud of from my time at Google is the VC program I built. This community building is part of an experience I want to discuss next, which is my passion project around China. Hold this slide while delivering the closing line.'
    },

    /* ================================================================ */
    /* Section divider: China                                           */
    /* ================================================================ */
    {
      id: 'divider-china',
      archetype: 'title',
      data: {
        eyebrow: 'Section 2',
        title: 'China.',
        subtitle: 'A passion project, fifteen years in.',
        showLogo: false
      },
      notes: 'Five second pause on the divider. Let the panel reset.'
    },

    /* ================================================================ */
    /* Section 2: China passion project                                 */
    /* ================================================================ */
    {
      id: 'slide-2-1-hook-hangzhou',
      archetype: 'image',
      data: {
        src: 'images/hangzhou-skyline.jpg',
        placeholder: 'Hangzhou skyline with small DeepSeek logo overlay',
        caption: 'Hangzhou. The weekend DeepSeek broke through.'
      },
      notes: 'DeepSeek launched during Chinese New Year while I was physically in China. The West woke up to it on Monday, after I had been watching it unfold over the weekend. I followed it through Western media and then spoke with a Shenzhen friend who works at Tencent. Stay on this slide for the full origin story, ninety seconds, walk back to age 19, rural China, the German government volunteer program, the promotion, the seminars, and the move to Beijing.'
    },

    {
      id: 'slide-2-2-teaching',
      archetype: 'image',
      data: {
        src: 'images/teaching-rural-china.jpg',
        placeholder: 'Teaching photo with the children, rural classroom',
        caption: 'Teaching at the volunteer post, rural China.'
      },
      notes: 'About sixty seconds. This earns the room emotionally, so use it deliberately. This is what I was doing, this is what I learned, this is when I learned I could be dropped into an unfamiliar environment and not just survive but rise. Name the village or province if it adds texture. Do not dwell longer than a minute.'
    },

    {
      id: 'slide-2-3-how-i-stay-current',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 2, how I stay current',
        headline: 'Infrastructure for a future venture, not hobby content.',
        cards: [
          {
            headline: 'Voices',
            lines: ['Kaiser Kuo on the Sinica podcast.', 'ChinaTalk for policy and tech.']
          },
          {
            headline: 'Print',
            lines: ['The Economist Drum Tower.', 'Long-form China analysis weekly.']
          },
          {
            headline: 'Ground level',
            lines: ['WeChat for live signal.', 'Air China for the regular trips back.']
          }
        ]
      },
      notes: 'About sixty seconds. Frame as infrastructure for a future business venture, not as hobby content. I have not been a tourist for a long time. I read these every week, I am fluent enough in conversational Chinese to get by, and I go back regularly. I have long-term plans to build something in or with China, and I am laying the groundwork now.'
    },

    {
      id: 'slide-2-4-energy-thesis',
      archetype: 'thesis',
      data: {
        eyebrow: 'Section 2, the thesis',
        headline: 'The AI race is an energy race. China quietly turned its energy surplus into an export.',
        columns: [
          {
            label: 'A. The electron gap',
            support: 'Most people think the AI race is about chips. The emerging constraint is electricity.',
            hero: { value: '543 GW', unit: '', label: 'added by China in 2024 alone, roughly ten times what the US added the same year.' },
            context: 'US electricity demand was flat for two decades and now cannot permit fast enough.',
            secondary: { value: '~400 GW', label: 'projected spare Chinese capacity by 2030, about three times global data-center demand (Goldman Sachs).' }
          },
          {
            label: 'B. Tokens as a power derivative',
            support: 'Power is the single largest line in inference operating cost, so Chinese analysts now describe AI tokens as a power derivative.',
            hero: { value: 'Feb 2026', unit: '', label: 'Chinese models passed US models in weekly token usage on OpenRouter for the first time.' },
            context: 'Electricity has always been hard to export. Tokens let China keep the electricity at home and export the economic value through inference.'
          }
        ]
      },
      notes: 'Seventy-five to ninety seconds. Two sentences of position, supporting evidence beneath, delivered with conviction and ready to defend in Q and A. Do not bend toward Nebius. The transferable signal stays implicit: I notice the constraint others are not looking at. Fact-check status (17 May 2026): 543 GW China 2024 build-out confirmed (NEA, multiple sources). The 10x US comparison checks out (US added ~56 GW in 2024). 400 GW spare by 2030 confirmed via Goldman Sachs. Feb 2026 OpenRouter crossover confirmed (week of Feb 9-15, 4.12T vs 2.94T tokens).'
    },

    {
      id: 'slide-2-5-landing',
      archetype: 'statement',
      data: {
        eyebrow: 'China, landing',
        headline: 'Same instinct, applied to Benelux.',
        sub: 'Fifteen years of paying attention. Still going back.',
        accent: true
      },
      notes: 'Landing line for the China section. The instinct that started in China, going where the work was, learning a market on its own terms, executing on hard things in unfamiliar territory, is the same one I would bring to Benelux. Speaking of which, let me show you what that looks like in a deal I worked on last year.'
    },

    /* ================================================================ */
    /* Section divider: The Deal                                        */
    /* ================================================================ */
    {
      id: 'divider-deal',
      archetype: 'title',
      data: {
        eyebrow: 'Section 3',
        title: 'The deal.',
        subtitle: 'A case study from the last twelve months.',
        showLogo: false
      },
      notes: 'Five seconds.'
    },

    /* ================================================================ */
    /* Section 3: Deal case study (PLACEHOLDERS)                        */
    /* ================================================================ */
    {
      id: 'slide-3-1-hook',
      archetype: 'statement',
      data: {
        eyebrow: 'Section 3, the hook',
        headline: '[Deal hook: drop the panel into a specific high-tension moment.]',
        sub: '[One supporting line of context, who and what.]',
        accent: true
      },
      notes: '[90 seconds. Hook and account setup. Open with the moment, not the company name. Replace bracketed copy in content.js when the case study is finalized.]'
    },

    {
      id: 'slide-3-2-complication',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 3, the complication',
        headline: '[Two forces working against this deal.]',
        cards: [
          {
            headline: '[Competitive situation]',
            lines: [
              '[Incumbent vendor and their lock-in.]',
              '[Why the easy answer was to do nothing.]'
            ]
          },
          {
            headline: '[Org complexity]',
            lines: [
              '[Stakeholder map: champion, blocker, economic buyer.]',
              '[What changed in the org during the cycle.]'
            ]
          }
        ]
      },
      notes: '[100 seconds. Build the complication so the strategy slide lands. Replace bracketed copy in content.js.]'
    },

    {
      id: 'slide-3-3-strategy',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 3, the strategy',
        headline: '[How the path to signature was structured.]',
        cards: [
          {
            headline: '[Move 1]',
            lines: ['[What I did.]', '[Why it mattered at that point in the cycle.]']
          },
          {
            headline: '[Move 2]',
            lines: ['[What I did.]', '[The signal it created internally at the account.]']
          },
          {
            headline: '[Move 3]',
            lines: ['[What I did.]', '[How it tied the technical and commercial threads together.]']
          }
        ]
      },
      notes: '[120 seconds. Three deliberate moves, not a story of luck. Replace bracketed copy in content.js.]'
    },

    {
      id: 'slide-3-4-hard-moment',
      archetype: 'statement',
      data: {
        eyebrow: 'Section 3, the hard moment',
        headline: '[The specific hard moment, in one sentence.]',
        sub: '[The move I made, and what it cost me to make it.]',
        accent: true
      },
      notes: '[100 seconds. One moment, one move. This is the slide that shows judgment under pressure. Replace bracketed copy in content.js.]'
    },

    {
      id: 'slide-3-5-outcome',
      archetype: 'data',
      data: {
        eyebrow: 'Section 3, the outcome',
        headline: '[What was signed.]',
        callouts: [
          { value: '[$X.XM]', unit: 'deal value', label: '[ACV or TCV, name it]' },
          { value: '[XX days]', unit: 'cycle length', label: '[from first meeting to signed]' },
          { value: '[XX]', unit: 'modules', label: '[scope of what was signed]' },
          { value: '[X]', unit: 'stakeholders', label: '[economic, technical, security]' }
        ],
        bars: {
          title: '[Optional: deal-progression visual]',
          unit: '',
          series: [
            { label: 'Stage 1', value: 25, color: 'purple' },
            { label: 'Stage 2', value: 50, color: 'purple' },
            { label: 'Stage 3', value: 75, color: 'purple' },
            { label: 'Signed', value: 100, color: 'lime' }
          ]
        }
      },
      notes: '[90 seconds. Outcome and short transition into the territory section. Replace bracketed copy in content.js.]'
    },

    /* ================================================================ */
    /* Section divider: Benelux Territory                               */
    /* ================================================================ */
    {
      id: 'divider-territory',
      archetype: 'title',
      data: {
        eyebrow: 'Section 4',
        title: 'Benelux territory.',
        subtitle: 'The plan, the accounts, the first ninety days.',
        showLogo: false
      },
      notes: 'Five seconds. This is the section the panel is weighting most.'
    },

    /* ================================================================ */
    /* Section 4: Success plan and territory                            */
    /* ================================================================ */
    {
      id: 'slide-4-1-thesis',
      archetype: 'statement',
      data: {
        eyebrow: 'Section 4, the thesis',
        headline: 'Land digital natives fast. Use them to open enterprise.',
        sub: 'Reference accounts on technical merit, then a full-stack, low-TCO sovereignty story into financial services, healthcare and media. VC relationships accelerate the first step. AI-engineering community underpins both.',
        accent: true
      },
      notes: 'Sixty seconds. The whole territory plan in two lines. Everything that follows is the proof.'
    },

    {
      id: 'slide-4-2-two-motions',
      archetype: 'diagram',
      data: {
        eyebrow: 'Section 4, the motion',
        headline: 'Two motions in parallel, one ecosystem feeding both.',
        motions: [
          {
            label: 'Motion 1',
            headline: 'AI-natives, fast.',
            accent: 'lime',
            lines: [
              'Engineering-led entry, founder and CTO conversations.',
              'Close on technical merit, Token Factory and dedicated GPU.',
              'Booking.com, Adyen, TomTom, Picnic, Cradle.bio, Weaviate.'
            ]
          },
          {
            label: 'Motion 2',
            headline: 'Enterprise, slower.',
            accent: 'purple',
            lines: [
              'Top-down, multi-threaded, committee-driven.',
              'Anchored by sovereignty, DORA, NIS2, and the EU AI Act.',
              'KBC, the ABN AMRO and ING and Rabobank trilateral, Philips HealthSuite, DPG Media.'
            ]
          }
        ],
        band: {
          label: 'Horizontal layer feeding both',
          text: 'VC ecosystem (Index Ventures) plus Nebius DevRel and AI House Amsterdam.'
        }
      },
      notes: 'Ninety seconds. Walk the two motions, then point at the band underneath. The same VC and DevRel layer feeds both, which is the structural advantage. This is also where Index Ventures comes back, tying to the Section 1 closing line.'
    },

    {
      id: 'slide-4-3-why-now',
      archetype: 'timeline',
      data: {
        eyebrow: 'Section 4, why Benelux, why now',
        headline: 'A regulatory forcing function, dated.',
        items: [
          {
            date: 'Nov 2025',
            text: 'Every major Dutch news organization co-signs a joint letter against US and Chinese AI scraping, coordinated by Stichting Democratie en Media.',
            accent: 'purple'
          },
          {
            date: 'Feb 2026',
            text: 'Rabobank, ABN AMRO and ING publicly announce a trilateral plan to reduce dependence on US technology providers.',
            accent: 'lime'
          },
          {
            date: '2026 to 2027',
            text: 'EU AI Act, DORA and NIS2 converge. Compute that stays in Europe becomes a procurement requirement, not a nice-to-have.',
            accent: 'purple'
          }
        ],
        footer: 'Amsterdam HQ, major data center in Finland, large GPU cluster in Paris, Nasdaq-listed, no CLOUD Act exposure. The cleanest sovereignty story in the market.'
      },
      notes: 'A hundred seconds. This is the strongest, most specific argument in the deck. Give it real space. The trilateral plus the media letter is what makes the conversation different from any abstract sovereignty pitch.'
    },

    {
      id: 'slide-4-4-ai-natives',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 4, AI-natives in active cycle',
        headline: 'Five accounts to land first.',
        cards: [
          {
            headline: 'Booking.com',
            lines: ['480 ML models, 400B predictions per day.', 'Foundation models for personalization on the roadmap.']
          },
          {
            headline: 'Adyen',
            lines: ['1.4B parameter foundation model in build.', 'Compute is the binding constraint, our wedge.']
          },
          {
            headline: 'TomTom',
            lines: ['Orbis Maps, continuous training plus inference.', 'Be their European training partner, not displacement.']
          },
          {
            headline: 'Picnic and Cradle.bio',
            lines: ['Picnic trains in-house, forecasting through agentic ordering.', 'Cradle on sovereignty, warm via the UCSF protein reference.']
          }
        ]
      },
      notes: 'A hundred seconds. Only the active-cycle subset. The full list is back-pocket for live Q and A, deliberately not on this slide. The point is a pause, not a directory.'
    },

    {
      id: 'slide-4-5-enterprise',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 4, enterprise',
        headline: 'Four anchors for the slower motion.',
        cards: [
          {
            headline: 'KBC',
            lines: ['Kate serves 6M customers across five countries.', 'Agentic launch in 2026 compounds token demand.']
          },
          {
            headline: 'NL banking trilateral',
            lines: ['Rabobank, ABN AMRO, ING.', 'Largest uncommitted sovereign inference budget in NL.']
          },
          {
            headline: 'Philips HealthSuite',
            lines: ['Cloud informatics across radiology and pathology.', 'EU residency conversation, faster than full Philips.']
          },
          {
            headline: 'DPG Media and RTL',
            lines: ['Fresh tech stack post-merger, CTO-led.', 'Streaming, ad targeting and generative tools at scale.']
          }
        ]
      },
      notes: 'A hundred seconds. Same grammar as the AI-natives slide. Anchor accounts, not the full list. KBC and the trilateral are the structural prizes.'
    },

    {
      id: 'slide-4-6-vc-differentiator',
      archetype: 'cards',
      data: {
        eyebrow: 'Section 4, the VC differentiator',
        headline: 'Index Ventures is the warm path nobody else has.',
        cards: [
          {
            headline: 'Portfolio overlap',
            lines: ['Weaviate, DataSnipper, Tebi, Duna.', 'All four are direct Nebius targets.']
          },
          {
            headline: 'Partner-level access',
            lines: ['Existing personal connections at partner level.', 'Warm intros to multiple portfolios at once.']
          },
          {
            headline: 'Pipeline multiplier',
            lines: ['Runs alongside direct sales, not a separate function.', 'Ties back to the Google EMEA VC playbook I already shipped.']
          }
        ]
      },
      notes: 'Ninety seconds. This is the slide that ties back to the Section 1 closing line about the VC community. The panel should hear that connective logic.'
    },

    {
      id: 'slide-4-7-first-90-days',
      archetype: 'data',
      data: {
        eyebrow: 'Section 4, the first ninety days',
        headline: 'Two PoCs in build. One pilot in financial services.',
        callouts: [
          { value: '2', unit: 'PoCs', label: 'pre-training prospects converted to named PoCs' },
          { value: '1', unit: 'pilot', label: 'Token Factory post-training pilot in financial services' },
          { value: '5', unit: 'Index intros', label: 'warm partner-level introductions opened' },
          { value: '1', unit: 'AI House event', label: 'Nebius DevRel presence at Prosus AI House' }
        ],
        bars: {
          title: 'Ninety-day milestones, by week',
          unit: 'cumulative count',
          series: [
            { label: 'Wk 0 to 3', value: 1, color: 'purple' },
            { label: 'Wk 4 to 6', value: 3, color: 'purple' },
            { label: 'Wk 7 to 9', value: 5, color: 'purple' },
            { label: 'Wk 10 to 13', value: 8, color: 'lime' }
          ]
        }
      },
      notes: 'Eighty seconds. End on execution, not on a vision statement. The lime bar is week ten to thirteen because that is when the first cycle compounds into the second.'
    }
  ]
};
