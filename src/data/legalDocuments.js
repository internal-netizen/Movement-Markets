// Legal documents and regulatory disclosures for Movement Markets Ltd.
// Registered in Saint Lucia | Registration No. 2026-00660
// Registered Office: Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.

export const COMPANY_DETAILS = {
  legalName: 'Movement Markets Ltd',
  shortName: 'Movement Markets',
  registrationNo: '2026-00660',
  registeredAddress: 'Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia',
  jurisdiction: 'Saint Lucia',
  governingLaw: 'Laws of Saint Lucia',
  supportEmail: 'support@movementmarkets.com',
  website: 'https://movementmarkets.com',
};

export const COOKIE_CATEGORIES = [
  {
    id: 'necessary',
    title: 'Strictly Necessary',
    required: true,
    description: 'Necessary cookies help make a website usable by enabling basic functions like page navigation, access to secure areas of the website, and platform security. The website cannot function properly without these cookies.',
    cookies: [
      { name: 'mm_session', provider: 'movementmarkets.com', purpose: 'Preserves user session state across page requests and client portal authentication.', expiry: 'Session', type: 'HTTP Cookie' },
      { name: 'mm_cookie_consent', provider: 'movementmarkets.com', purpose: 'Stores the visitor’s cookie consent status for the current domain.', expiry: '1 year', type: 'HTTP Cookie' },
      { name: 'cf_clearance', provider: 'cloudflare.com', purpose: 'Clearance cookie used by Cloudflare to manage secure bot mitigation and DDoS filtering.', expiry: '1 year', type: 'HTTP Cookie' },
      { name: '__cf_bm', provider: 'cloudflare.com', purpose: 'Distinguishes between humans and automated bots to defend API routes against malicious traffic.', expiry: '30 minutes', type: 'HTTP Cookie' }
    ]
  },
  {
    id: 'preferences',
    title: 'Preferences',
    required: false,
    description: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred theme (light/dark mode) or region.',
    cookies: [
      { name: 'mm-design-theme', provider: 'movementmarkets.com', purpose: 'Remembers the user’s selected visual display mode (light mode or dark mode).', expiry: 'Persistent', type: 'HTML Local Storage' },
      { name: 'mm_lang', provider: 'movementmarkets.com', purpose: 'Remembers the visitor’s chosen language and regional trading unit format.', expiry: '1 year', type: 'HTTP Cookie' }
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics & Analytics',
    required: false,
    description: 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously to optimize latency and routing speed.',
    cookies: [
      { name: '_ga', provider: 'google-analytics.com', purpose: 'Registers a unique ID that is used to generate statistical data on how the visitor uses the website.', expiry: '2 years', type: 'HTTP Cookie' },
      { name: '_ga_*', provider: 'google-analytics.com', purpose: 'Used by Google Analytics to collect data on the number of times a user has visited the website as well as dates for the first and most recent visit.', expiry: '2 years', type: 'HTTP Cookie' },
      { name: 'mm_latency_log', provider: 'movementmarkets.com', purpose: 'Collects anonymous trade server ping and web-socket roundtrip latency metrics to optimize trade routing nodes.', expiry: '30 days', type: 'HTTP Cookie' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    required: false,
    description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.',
    cookies: [
      { name: 'mm_ref_partner', provider: 'movementmarkets.com', purpose: 'Tracks Introducing Broker (IB) and Affiliate referral tags to correctly attribute partnership commission rebates.', expiry: '90 days', type: 'HTTP Cookie' },
      { name: '_fbp', provider: 'facebook.com', purpose: 'Used by Meta to deliver advertisement products such as real-time bidding from third party advertisers.', expiry: '3 months', type: 'HTTP Cookie' }
    ]
  }
];

/**
 * Legal documents. Text follows the structure of the published documents of
 * a comparable Saint Lucia-registered broker, with every identifying detail —
 * company name, registration number, registered office, email and web
 * addresses — replaced by Movement Markets Ltd’s own. Review by counsel before use.
 */
export const LEGAL_DOCUMENTS = [
  {
    id: 'client-agreement',
    title: 'Client Agreement',
    shortTitle: 'Client Agreement',
    category: 'Core Trading Terms',
    lastUpdated: 'September 2026',
    description: 'The agreement that governs your account and every transaction with Movement Markets Ltd: services, orders, margin, funds, liabilities and termination.',
    sections: [
      {
        heading: 'Important Notice',
        content: `Important Risk Warning

Movement Markets Ltd is registered in Saint Lucia under Registration Number 2026-00660. Registered office: Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.

Contracts for Difference (CFDs) and other derivative products are complex, speculative and highly risky. Trading with leverage can magnify both profits and losses. The Client may lose all funds deposited in the Client Account and, where Negative Balance Protection does not expressly apply, may become liable for additional amounts.

Market volatility, insufficient liquidity, price gaps, slippage, system disruption and trading suspension may cause Orders to be executed at a different price from the price requested or may prevent execution. Stop Loss, Take Profit, Margin Call and Stop-Out mechanisms do not guarantee that losses will be limited.

The Company does not provide investment, legal, tax or financial advice. The Client must independently assess every Transaction and trade only after understanding the nature of the relevant product, the Charges involved and the full extent of the financial exposure.

The Client should read this Agreement together with the Risk Disclosure Notice before opening a Client Account or placing an Order.`,
      },
      {
        heading: 'Section A · 1. Introduction',
        content: `1.1 This Agreement is entered into between Movement Markets Ltd (the "Company") and the Client, being a natural person or legal entity whose Account Opening Application Form has been accepted by the Company.

1.2 The Company is registered in Saint Lucia under Registration Number 2026-00660, with its registered office at Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. The Company provides an online trading platform offering access to Contracts for Difference and other derivative products made available by the Company.

1.3 This Client Agreement, together with the Account Opening Application Form, Risk Disclosure Notice, Privacy Policy, Conflict of Interest Policy, Contract Specifications and any other legal document expressly incorporated into it or published in the legal-documents section of the Website, as amended from time to time, constitutes the agreement between the Company and the Client and governs the Services, Client Account and all CFD activity conducted with the Company.

1.3A Where any conflict or inconsistency arises between the documents forming this Agreement, they shall take precedence in the following order: (a) this Client Agreement; (b) the General Business Terms; (c) the Contract Specifications; and (d) any other content published on the Website.

1.3B Marketing and informational content published on the Website, including any indicative spread, commission, leverage or other trading condition presented in a table, summary or illustration, is provided for information only, does not form part of this Agreement, and is not binding on the Company. The Client should rely on the documents listed in clause 1.3A.

1.4 This Agreement supersedes any previous agreement, arrangement, representation or statement concerning the Services, whether made by the Company, an Introducer or another person, except where expressly incorporated into this Agreement.

1.5 The Company will collect, use, store and otherwise process the Client's personal information in accordance with the Privacy Policy, as amended from time to time and made available on the Website.`,
      },
      {
        heading: 'Section A · 2. Interpretation of Terms',
        content: `2.1 In this Agreement, unless the context requires otherwise, the following terms shall have the meanings set out below:

“Access Data” means the Client’s username, password, personal identification number, security code, API key, token or any other information required to access the Client Account, Personal Area, Trading Platform or Services.

“Account Opening Application Form” means the application form, questionnaire and supporting information submitted by a natural person or legal entity when applying to open a Client Account with the Company.

“Adjustment Event” means any event affecting an Underlying Asset or market that may require the Company to adjust, suspend, close or otherwise modify a Transaction, including a Corporate Action, change to an index, market disruption, delisting or insolvency event.

“Affiliate” means any entity that directly or indirectly controls, is controlled by or is under common control with the Company.

“Agreement” means this Client Agreement, the Account Opening Application Form and all policies, notices, schedules, product terms and other legal documents expressly incorporated into them, as amended from time to time.

“Applicable Law” means all laws, regulations, rules, regulatory requirements, market rules, orders and legally binding requirements applicable to the Company, the Client, the Services or a Transaction.

“Ask Price” means the price at which the Client may open a buy position or close a sell position in a Financial Instrument.

“Authorized Person” means a person authorized by the Client and accepted by the Company to act for or provide instructions on behalf of the Client.

“Balance” means the amount recorded in the Client Account after completed Transactions, deposits, withdrawals, fees, credits and other account adjustments, excluding unrealized profits and losses on Open Positions.

“Base Currency” means the currency in which the Client Account is denominated or, in relation to a Currency Pair, the first currency shown in that pair, as the context requires.

“Bid Price” means the price at which the Client may open a sell position or close a buy position in a Financial Instrument.

“Business Day” means a day on which the Company is open for business, excluding Saturdays, Sundays, public holidays in Saint Lucia and any other day designated by the Company as a non-business day.

“CFD” or “Contract for Difference” means a derivative contract under which the parties exchange the difference between the opening and closing values of an Underlying Asset without transferring ownership of that Underlying Asset.

“Client” means the natural person or legal entity whose Account Opening Application Form has been accepted by the Company and who has entered into this Agreement.

“Client Money” means funds received from or held for the Client and recorded by the Company as attributable to the Client, subject to this Agreement.

“Client Account” means an account opened and maintained by the Company in the Client’s name through which Transactions, deposits, withdrawals, fees, credits and other operations are recorded.

“Closed Position” means a Transaction that is no longer open and for which the resulting profit or loss has been realized and recorded in the Client Account.

“Company” means Movement Markets Ltd, a company registered in Saint Lucia under Registration Number 2026-00660.

“Completed Transaction” means a Transaction for which both the opening and corresponding closing operations have been completed.

“Contract Specifications” means the trading conditions applicable to a Financial Instrument, including its spread, commission, leverage, margin requirement, minimum and maximum transaction size, trading hours, swap, financing charge and order limitations.

“Corporate Action” means an event affecting an issuer or Underlying Asset, including a dividend, distribution, rights issue, bonus issue, stock split, consolidation, merger, takeover, reorganization, delisting, suspension, insolvency or any similar event.

“Currency Pair” means two currencies quoted against each other and traded as a single Financial Instrument.

“Electronic Trading Service” means any website, application, system, software, API or Trading Platform made available by or on behalf of the Company for accessing the Services.

“Equity” means the Balance of the Client Account adjusted by the Floating Profit or Loss on all Open Positions and any other applicable credits or charges.

“Custom Indicator” means software or a technical tool used to calculate, display or analyse market information on or in connection with the Trading Platform.

“Event of Default” means any circumstance identified as an event of default under Clause 10 of Section A of this Agreement.

“Expert Advisor” or “EA” means software or an automated trading system used to analyze markets, generate signals, place Orders or manage Transactions without continuous manual intervention.

“Financial Instrument” means a derivative product, CFD or any other financial product made available for trading by the Company from time to time.

“Floating Profit or Loss” means the unrealized profit or loss on an Open Position calculated using the applicable current price.

“Force Majeure Event” means an event beyond the Company’s reasonable control that prevents, delays or materially affects the performance of its obligations, as further described in Clause 11 of Section A.

“Free Margin” means the Equity available in the Client Account that is not being used to satisfy Margin Requirements for Open Positions.

“Hedged Position” means an Open Position that is fully or partially offset by another Open Position in the same Financial Instrument but in the opposite direction.

“Inactive Account” means a Client Account in which no trading or non-trading activity has occurred for the period specified by the Company.

“Insolvency Event” means bankruptcy, insolvency, liquidation, administration, receivership, winding-up, an arrangement with creditors or any comparable event affecting the Client.

“Initial Margin” means the minimum amount required to open a Position in a Financial Instrument.

“Introducer” means a person who introduces or refers a Client to the Company but is not a party to this Agreement and is not authorized to bind the Company unless expressly agreed in writing.

“Leverage” means the ratio between the value of a Position and the Margin required to open or maintain that Position.

“Hedged Margin” means the Margin, if any, required by the Company for a Hedged Position.

“Long Position” means a Position opened by buying a Financial Instrument in anticipation that its price will increase.

“Lot” means the standardized unit used to measure the Transaction Size of a Financial Instrument.

“Lot Size” means the quantity of an Underlying Asset or units represented by one Lot of a Financial Instrument.

“Margin” means the amount required by the Company as security for opening or maintaining a Position and does not represent the full value or purchase price of the Underlying Asset.

“Market Disruption” means an event or condition described in Clause 7 of Section E that disrupts reliable pricing, liquidity, execution or orderly trading.

“Margin Call” means a warning or notification that the Equity or Margin Level of the Client Account has fallen to or below a level determined by the Company.

“Margin Level” means the ratio of Equity to used Margin, expressed as a percentage and calculated in accordance with the Trading Platform.

“Margin Requirement” means the amount of Margin required to open or maintain a Position, as determined by the Company from time to time.

“Market Order” means an Order to buy or sell a Financial Instrument at the best price available for execution at the relevant time.

“Necessary Margin” means the Margin required by the Company to maintain an existing Open Position.

“Negative Balance Protection” means a protection which, where applicable and subject to this Agreement, limits the Client’s trading-related liability so that the Client Account does not remain below zero after all applicable adjustments have been completed.

“Open Position” means a Transaction that has been entered into but has not yet been closed.

“Order” means an instruction or request from the Client to open, close, modify or cancel a Transaction or Position.

“Party” means the Company or the Client, and “Parties” means both of them.

“Pending Order” means an Order that is intended to be executed only when the specified price or other execution condition is reached.

“Personal Area” means the secure section of the Company’s website or application through which the Client may manage Client Accounts, submit information and perform trading or non-trading operations.

“Politically Exposed Person” means a person who is or has been entrusted with a prominent public function, together with any family member or close associate treated as such under Applicable Law.

“Position” means the Client’s contractual exposure resulting from a Transaction in a Financial Instrument.

“Price Gap” means a situation in which the current price differs from the immediately preceding price without quotes being available at the intervening prices.

“Prohibited Trading Practice” means any trading technique, activity or conduct prohibited under Clause 3 of Section C of this Agreement.

“Quote” means the Bid Price and Ask Price displayed or otherwise provided by the Company for a Financial Instrument.

“Quote Currency” means the second currency shown in a Currency Pair.

“Services” means the products, platform access, order-execution facilities and related services provided by the Company under this Agreement.

“Short Position” means a Position opened by selling a Financial Instrument in anticipation that its price will decrease.

“Slippage” means the difference between the price requested or displayed when an Order is submitted and the price at which that Order is executed.

“Spread” means the difference between the Bid Price and the Ask Price of a Financial Instrument.

“Stop-Loss Order” means an instruction intended to close a Position when the relevant price reaches a specified level for the purpose of limiting a loss. Execution at the specified price is not guaranteed.

“Stop-Out” means the automatic closure of one or more Open Positions when the Client Account reaches the stop-out level determined by the Company.

“Swap” or “Rollover” means a financing charge or credit that may be applied when a Position remains open after the applicable daily cut-off time.

“Take-Profit Order” means an instruction intended to close a Position when the relevant price reaches a specified level for the purpose of securing a profit. Execution at the specified price is not guaranteed.

“Trading Commission” means a charge applied by the Company for opening, closing or maintaining a Transaction.

“Trading Day” means a day or period during which the relevant Financial Instrument is available for trading, as specified by the Company.

“Trading Platform” means any electronic system, application, website or software provided or made available by the Company through which the Client may access information, submit Orders or enter into Transactions.

“Trading Server” means the hardware and software used by or on behalf of the Company to receive, process, execute or record Orders and Transactions.

“Transaction” means any contract or trade entered into between the Client and the Company in a Financial Instrument.

“Transaction Size” means the quantity, number of Lots or notional value of a Transaction.

“Underlying Asset” means the asset, instrument, currency, commodity, security, index, benchmark or other reference value upon which the price of a Financial Instrument is based.

“Underlying Market” means the exchange, market, trading venue, liquidity source or other pricing environment from which information relating to an Underlying Asset may be obtained.

“Website” means the Company’s official website and any replacement or additional website operated by the Company and notified to the Client.

“Written Notice” means a notice delivered in writing, including by email, through the Personal Area, Trading Platform or Website, or by any other electronic communication method permitted under this Agreement.

2.2 Unless the context requires otherwise:

a) Words in the singular include the plural and words in the plural include the singular;

b) References to one gender include all genders;

c) References to a person include a natural person, legal entity, partnership, trust, association, government, governmental body or other organization;

d) The words “including”, “include” and “includes” shall be interpreted as being followed by the words “without limitation”;

e) References to a section, clause or schedule are references to a section, clause or schedule of this Agreement;

f) References to any law, regulation, policy or document include that law, regulation, policy or document as amended, replaced or re-enacted from time to time;

g) Headings are included for convenience only and shall not affect the interpretation of this Agreement;

h) Where an obligation applies to two or more Clients, that obligation shall apply to them jointly and severally;

i) Where there is any conflict between this Agreement and the Contract Specifications for a particular Financial Instrument, the Contract Specifications shall apply to the specific trading condition concerned, unless Applicable Law requires otherwise; and j) A reference to the Company includes, where appropriate, its directors, officers, employees, agents, delegates, service providers, successors and permitted assigns, without making any such person a party to this Agreement.`,
      },
      {
        heading: 'Section A · 2A. Client Categorisation',
        content: `2A.1 The Company categorises each Client as either a Retail Client or a Professional Client. The category assigned to the Client is stated in the Personal Area and determines the protections that apply to the Client Account.

2A.2 A Retail Client is any Client who is not categorised as a Professional Client. Retail Clients receive the highest level of protection available under this Agreement, including Negative Balance Protection where the Company confirms it is available for the relevant Client Account under clause 8.1.

2A.3 A Professional Client is a Client who has been accepted onto an Institutional Account. The Company may categorise a Client as a Professional Client where the Client satisfies the qualifying criteria in clause 2A.4 and confirms in writing that the Client understands the protections that are reduced or withdrawn as a result.

2A.4 The qualifying criteria for categorisation as a Professional Client are that the Client meets the minimum deposit published for the Institutional Account and satisfies at least one of the following: a) the Client has carried out transactions of significant size in the relevant market with reasonable frequency; b) the Client works, or has worked, in the financial sector in a role requiring knowledge of the relevant transactions; or c) the Client is a corporate entity, partnership, fund or other institution trading in the course of its business.

2A.5 A Client may request a change of category at any time by written request to the Company. The Company may accept or refuse the request at its discretion and will confirm any change in the Personal Area before it takes effect. A change of category applies to new Transactions only and does not alter the treatment of Positions already open.

2A.6 The following differ by category: a) Negative Balance Protection, which applies to Retail Clients in accordance with clause 8.1 and applies to Professional Clients only where the Company expressly confirms it; b) Margin Call and Stop-Out levels, which are as published for Retail Clients and may be agreed individually with Professional Clients; and c) leverage, Contract Specifications and execution arrangements, which may be negotiated with Professional Clients.

2A.7 The Company may review a Client's category at any time and may re-categorise a Client as a Retail Client where the Client no longer satisfies the criteria in clause 2A.4.`,
      },
      {
        heading: 'Section A · 3. Client Acceptance and Due Diligence',
        content: `3.1 The Company may refuse to accept an applicant as a Client, refuse to open or activate a Client Account, refuse to accept funds or prevent the applicant from commencing trading until:

a) The Account Opening Application Form has been properly and fully completed;

b) All identification, address-verification and other documents requested by the Company have been provided;

c) The Company has completed its identification, verification, anti-money laundering, counter-terrorist financing, sanctions, fraud-prevention, appropriateness and other internal compliance checks to its satisfaction; and d) The applicant has satisfied any other acceptance requirements imposed by the Company.

3.2 The Company may accept or reject an Account Opening Application Form at its sole discretion. The Company is not required to provide the applicant with a reason for its decision unless required by Applicable Law.

3.3 The Company may impose additional due-diligence requirements on applicants or Clients based on their country of residence, nationality, legal form, ownership structure, business activities, source of funds, source of wealth, payment method, risk profile or any other relevant circumstance.

3.4 The Client represents and warrants that all information and documentation submitted to the Company is complete, accurate, authentic and not misleading. The Client must promptly notify the Company of any change and provide updated information or documentation upon request.

3.5 The Company may, at any time during its relationship with the Client, request additional information or documentation that it considers necessary for:

a) Ongoing monitoring and verification of the Client;

b) Confirming the Client's identity, residential address, ownership or control;

c) Establishing the Client's source of funds or source of wealth;

d) Verifying that a payment method or account is held in the Client's name;

e) Assessing the Client's financial circumstances, knowledge, experience or understanding of the Services;

f) Investigating trading, payment or account activity; or g) Complying with Applicable Law, internal policies or requests from a competent authority, financial institution or payment service provider.

3.6 Once the Client has accepted the Agreement, successfully completed the Company's verification requirements and received confirmation that the Client Account has been approved, the Client may deposit funds and commence trading, subject to this Agreement and any restrictions imposed by the Company.

3.7 The Company may determine and change, at its discretion:

a) The information and documentation required from the Client;

b) The period within which the Client must provide the requested information or documentation;

c) The currencies and payment methods accepted by the Company;

d) Minimum or maximum deposit, withdrawal or transaction amounts; and e) Any account, funding or trading restrictions applicable to the Client.

The Company will notify the Client of material requirements or changes through a Written Notice, the Personal Area, the Trading Platform or the Website.

3.8 If the Client fails to provide requested information or documentation within the period specified by the Company, or if the Company cannot complete its checks to its satisfaction, the Company may:

a) Refuse or delay the opening or activation of the Client Account;

b) Reject or return funds to their source of origin;

c) Refuse or restrict further deposits or withdrawals;

d) Prevent the Client from opening new Positions;

e) Close, cancel or otherwise manage Open Positions where reasonably necessary;

f) Suspend or restrict access to the Client Account, Personal Area, Trading Platform or Services;

g) Reject, cancel or reverse a Transaction where permitted under this Agreement;

h) Terminate the Agreement and close the Client Account; or i) Take any other action reasonably considered necessary for compliance or risk-management purposes.

3.9 The Client must ensure that all deposits and withdrawals are made through a payment method or account held in the Client's own name unless the Company has expressly approved otherwise in writing. The Company may reject or return a third-party payment and may request evidence establishing the ownership and source of any funds.

3.10 The Company may delay the processing of an application, deposit, withdrawal, Order or other instruction while verification, compliance or security checks are being completed. To the maximum extent permitted by Applicable Law, the Company shall not be liable for losses, costs, lost opportunities or delays arising solely from the reasonable performance of such checks.

3.11 Acceptance of an applicant, approval of a Client Account or acceptance of a deposit on one occasion does not prevent the Company from conducting further checks, requesting additional documentation or exercising any of its rights under this Clause at a later time.

3.12 No Client Account shall be considered approved or active until the Company has issued confirmation of acceptance to the Client. The Company's acceptance of funds before approval does not oblige the Company to accept the applicant as a Client or permit trading.`,
      },
      {
        heading: 'Section A · 4. Services',
        content: `4.1 Subject to the Client fulfilling their obligations under this Agreement, the Company may, at its discretion, provide the following Services to the Client:

a) Receive and transmit the Client's Orders in CFDs and other derivative products made available by the Company;

b) Execute the Client's Orders in CFDs and other derivative products made available by the Company; and c) Provide foreign-currency conversion services where such services are connected with the receipt, transmission or execution of the Client's Orders or the operation of the Client Account.`,
      },
      {
        heading: 'Section A · 5. Advice and Provision of Information',
        content: `5.1 The Company will not advise the Client on the merits of any particular Transaction or provide any form of investment advice. The Client acknowledges that the Services do not include investment advice relating to CFDs, other derivative products or the Underlying Markets. The Client shall enter into Transactions and make all trading decisions based on their own judgment.

By requesting the Company to enter into a Transaction, the Client confirms that they are solely responsible for independently assessing and investigating the merits and risks of that Transaction and that they possess sufficient knowledge and experience, or have obtained appropriate professional advice, to make such an assessment. The Company does not assume any fiduciary duty toward the Client.

5.2 The Company is under no obligation to provide the Client with legal, tax, financial or other professional advice relating to any Transaction. The Client should obtain independent professional advice if they are uncertain about the legal, financial or tax consequences of a Transaction. The Client acknowledges that applicable laws and tax treatment may change from time to time.

5.3 The Company may, at its discretion, provide the Client with educational materials, market information, news, research, analytical tools, market commentary or other information through its Website, Personal Area, Trading Platform, newsletters or other communication channels. Where the Company provides such information:

a) It is provided solely for general informational and educational purposes;

b) It does not constitute investment, legal, tax or financial advice, an investment recommendation or an invitation to enter into a Transaction;

c) The Company does not represent, warrant or guarantee that the information is accurate, correct, complete, current or suitable for the Client;

d) The Company shall not be responsible for any decision, action, loss or liability resulting from the Client's use of or reliance upon that information;

e) The information does not take account of the Client's personal objectives, financial circumstances, knowledge, experience or risk tolerance; and f) Where information is restricted to a particular person or category of persons, the Client must not distribute it to any person for whom it is not intended.

5.4 Any educational material, market information, research, news, commentary, analytical tool or other information provided by the Company may be amended, replaced, delayed or withdrawn at any time without prior notice. The Company does not guarantee that the Client will receive such information before or at the same time as other clients.`,
      },
      {
        heading: 'Section A · 6. Commissions, Fees and Charges',
        content: `6.1 The provision of the Services and the performance of trading and non-trading operations under this Agreement may be subject to commissions, spreads, swaps, financing costs, administration fees and other charges payable to the Company (collectively, the "Charges").

6.2 The applicable Charges will be displayed on the Company's Website, Personal Area, Trading Platform or Contract Specifications, or otherwise communicated to the Client. Charges relating to a Transaction may be applied when the Transaction is opened, while it remains open or when it is closed.

6.3 Certain Charges may be calculated in relation to the Transaction Size, notional value, duration or other characteristics of a CFD. The Client is responsible for reviewing and understanding the applicable Charges and how they are calculated before placing an Order.

6.4 In addition to the Charges imposed by the Company, the Client shall be responsible for any fees, commissions, costs or expenses imposed by banks, payment service providers, liquidity providers, execution venues or other third parties in connection with the Client Account, a Transaction, deposit, withdrawal or use of the Services.

6.5 The Company may charge the Client for processing deposits, withdrawals, refunds, chargebacks, returned payments, currency conversions or other payment operations. The applicable charge may depend on the amount, currency, payment method, payment provider and costs incurred by the Company.

6.6 The Company may change, introduce or discontinue any Charge from time to time. The Company will provide Written Notice before a material change takes effect. A change resulting from market conditions, interest rates, tax treatment, third-party charges or circumstances beyond the Company's reasonable control may take effect immediately, provided that the Client is informed as soon as reasonably practicable.

6.7 If the Client does not agree to a material change in the Charges, the Client may terminate this Agreement in accordance with its termination provisions. Continued use of the Services after the effective date of the change shall constitute acceptance of the revised Charges.

6.8 All Charges and other amounts due to the Company shall become payable when incurred or upon demand. The Company may debit or deduct such amounts from the Client Account, any payment due to the Client or any funds held for the Client, without obtaining further authorization.

6.9 The Client is solely responsible for identifying, reporting and paying all taxes, duties, levies, stamp charges and governmental assessments arising from or connected with the Client Account, any Transaction or use of the Services. The Company does not act as the Client's tax agent or adviser.

6.10 The Company may, at its discretion, waive or reduce a Charge for a particular Client or category of clients for any period and subject to any conditions it considers appropriate. Such waiver or reduction does not oblige the Company to provide the same treatment on another occasion.

6.11 The Company may pay or receive commissions, fees or other monetary or non-monetary benefits to or from an Introducer, Affiliate, service provider or other third party, to the extent permitted by Applicable Law. Information concerning such arrangements will be provided where required by Applicable Law.

6.12 The Company may recover reasonable costs or impose a fee resulting from fraud, chargebacks, abusive conduct, Prohibited Trading Practices or a breach of this Agreement, to the extent permitted by Applicable Law. Such amounts may be deducted from the Client Account and shall become immediately due and payable.`,
      },
      {
        heading: 'Section A · 7. Notices and Communications',
        content: `7.1 The Company may communicate with the Client or an Authorized Person by email, Personal Area, Trading Platform, Website, telephone, live chat, post, courier or any other method specified by the Company.

7.2 A communication shall be deemed received when sent, posted, published or delivered, unless the Company receives a non-delivery notification. It shall take effect upon receipt unless a later effective time is stated.

7.3 The Client must ensure that their contact details remain complete and accurate and must notify the Company immediately of any change.

7.4 The Company may record and retain calls, messages, Orders, instructions and other communications. Such records may be used as evidence to the extent permitted by Applicable Law.`,
      },
      {
        heading: 'Section A · 8. Confidentiality and Data Protection',
        content: `8.1 The Company may collect information about the Client directly from the Client or from third parties, including identity-verification providers, credit-reference agencies, fraud-prevention agencies, financial institutions, payment service providers and public registers.

8.2 The Company will treat the Client's non-public information as confidential and may collect, use, store and otherwise process it for providing and improving the Services, administering the Client Account, verifying the Client's identity, preventing fraud and money laundering, managing risk, complying with Applicable Law and exercising the Company's legal rights.

8.3 The Company may disclose Client information where required or reasonably necessary:

a) By law, court order or a competent authority;

b) To banks, payment providers, execution providers and other parties involved in providing the Services;

c) To Affiliates, professional advisers, auditors and service providers;

d) To investigate or prevent fraud, money laundering or other unlawful activity;

e) To protect or enforce the Company's legal rights; or f) With the Client's request or consent.

8.4 Client information may be processed or transferred outside the Client's country of residence. The Company will process such information in accordance with Applicable Law and its Privacy Policy.

8.5 The Client's data-protection rights, the purposes and legal bases for processing, applicable retention periods and methods for submitting a data request are described in the Privacy Policy available on the Company's Website, as amended from time to time.`,
      },
      {
        heading: 'Section A · 9. Amendments, Assignment and Termination',
        content: `9.1 The Company may change this Agreement or the terms applicable to any Transaction by giving the Client Written Notice. Unless the notice specifies a later date, the change shall become binding on the earlier of:

a) Ten Business Days after the notice is issued; or b) The Client placing an Order after receiving the notice.

9.2 If the Client does not accept a change, the Client may terminate this Agreement before the change becomes effective. Continuing to use the Services or placing an Order after that time shall constitute acceptance of the change.

9.3 Neither Party may make commitments in the name of the other Party, use the other Party's name, trademarks or intellectual property, or represent that it is affiliated with or authorized to act for the other Party without prior written approval.

9.4 The Client may not assign, transfer, sell, charge or otherwise dispose of any right or obligation under this Agreement without the Company's prior written consent.

9.5 The Company may assign, transfer or novate any of its rights or obligations under this Agreement to an Affiliate, successor, purchaser or other third party, including in connection with a reorganization or the sale or transfer of all or part of the Company's business or assets.

9.6 Either Party may terminate this Agreement at any time by giving Written Notice to the other Party.

Termination shall not affect any existing Order or Transaction or release either Party from an obligation or liability arising before termination.

9.7 The Company may terminate this Agreement immediately if it reasonably believes that:

a) The Client provided false, inaccurate or misleading information;

b) The Client participated in or assisted fraud, money laundering, terrorist financing or another unlawful activity;

c) The Client is being investigated by a law-enforcement, judicial, regulatory or other competent authority;

d) Abnormal trading or market conditions exist;

e) Reliable prices cannot be provided because relevant market information is unavailable;

f) The Client possesses or may be trading using inside information;

g) An Event of Default or Insolvency Event has occurred; or h) Termination is required by Applicable Law or is reasonably necessary for compliance, security or risk-management purposes.

9.8 Following termination, the Company may reject new Orders, close Open Positions, settle outstanding Transactions, deduct any amount owed by the Client and return the remaining Balance in accordance with this Agreement.

9.9 Within two Business Days after termination, the Client must, if requested by the Company, return or securely destroy materials belonging to the Company. Obligations relating to payment, settlement, confidentiality, intellectual property, indemnity and the return or destruction of materials shall survive termination.`,
      },
      {
        heading: 'Section A · 10. Events of Default',
        content: `10.1 Each of the following circumstances shall constitute an Event of Default:

a) The Client fails to pay any Margin, Charge, debit balance or other amount when due under this Agreement;

b) The Client fails to perform a material obligation under this Agreement or fails to comply with an instruction, restriction or requirement imposed by the Company;

c) The Client fails to provide information or documentation requested for identification, verification, due diligence, source-of-funds, source-of-wealth, sanctions, fraud-prevention or other compliance purposes within the period specified by the Company;

d) Any information, representation, warranty or document provided by or on behalf of the Client is false, inaccurate, incomplete, expired, unauthentic or misleading, or subsequently becomes so;

e) The Client fails to notify the Company of a material change to the Client's identity, address, contact details, ownership, control, legal status, financial circumstances or other information previously provided;

f) The Company reasonably suspects that the Client is involved in fraud, money laundering, terrorist financing, sanctions evasion, market abuse, insider dealing or another unlawful or suspicious activity;

g) A chargeback, payment dispute, unauthorized payment claim, returned payment or suspected payment fraud arises in connection with the Client Account;

h) The Client engages or attempts to engage in a Prohibited Trading Practice, including price-latency exploitation, manipulation of Quotes, abusive arbitrage, coordinated trading, exploitation of errors, system overload or trading without legitimate market risk;

i) The Client violates the Company's API terms, platform-security requirements or rules governing automated or algorithmic trading;

j) The Client shares Access Data, permits unauthorized access to the Client Account or allows another person to use the Services contrary to this Agreement;

k) The Client fails to comply with any limit or restriction relating to Orders, Positions, leverage, Margin, deposits, withdrawals, payment methods, the Trading Platform or the Client Account;

l) The Client fails to respond to the Company or cannot be contacted for a period that the Company reasonably considers material;

m) The Client dies, is declared missing, loses legal capacity or becomes incapable of managing their affairs;

n) The Client is unable to pay debts when due, becomes bankrupt or insolvent, enters into an arrangement with creditors, or becomes subject to liquidation, administration, receivership, winding-up or a similar procedure;

o) Any guarantee, security or other credit-support arrangement relating to the Client's obligations expires, becomes unenforceable, is withdrawn or is disputed before those obligations have been fully satisfied;

p) The Client repudiates this Agreement, denies an obligation under it or indicates an intention not to perform an obligation;

q) The Client breaches an agreement or applicable policy of an Affiliate, payment service provider or other service provider where that breach materially affects the Services or exposes the Company to legal, financial, operational or reputational risk;

r) A competent authority, court, financial institution, payment service provider or other legally authorised body requires or requests the Company to take action against the Client or Client Account;

s) Continuing to provide the Services becomes unlawful or would cause the Company or its service providers to breach Applicable Law; or t) The Company reasonably determines that action is necessary to protect the Company, its clients, service providers, systems or the integrity of the Trading Platform.

10.2 An act or omission of an Authorized Person or any person accessing or operating the Client Account with the Client's authority shall be treated as an act or omission of the Client.

10.3 Where an Event of Default has occurred or the Company reasonably suspects that one has occurred, the Company may investigate the matter and request additional information or documentation from the Client.

10.4 Following an Event of Default, the Company may, without prior Written Notice where reasonably necessary, take one or more of the following actions:

a) Suspend, restrict or block the Client Account, Personal Area, Trading Platform, Access Data or API access;

b) Reject new Orders or cancel Pending Orders;

c) Close, reduce, reverse or otherwise manage one or more Open Positions at the price available at the relevant time;

d) Increase Margin Requirements, reduce leverage or restrict the size, number or type of Transactions available to the Client;

e) Restrict, delay or refuse deposits, withdrawals, refunds, internal transfers or the use of a particular payment method;

f) Combine Client Accounts, consolidate Balances, convert currencies and exercise any lien, netting or set-off right available under this Agreement;

g) Freeze or retain funds where reasonably necessary to investigate the Event of Default, satisfy the Client's obligations or comply with Applicable Law;

h) Correct, cancel, reverse or adjust any Transaction, profit, loss, credit or account entry reasonably determined to have resulted from fraud, a Prohibited Trading Practice, an execution or pricing error, unauthorized activity or a material breach of this Agreement;

i) Recover any amount, loss, Charge, expense or liability owed by the Client;

j) Require the Client to immediately close or settle any Transaction;

k) Close one or more Client Accounts; or l) Terminate this Agreement with immediate effect.

10.5 Where prior notice is not reasonably possible, is prohibited by Applicable Law or could prejudice an investigation, the Company may act without notice and notify the Client afterwards when legally and reasonably permitted.

10.6 The Company may allow the Client an opportunity to remedy an Event of Default where it considers the matter capable of remedy. Allowing additional time on one occasion does not require the Company to do so on another occasion.

10.7 Subject to any applicable Negative Balance Protection, the Client remains responsible for all outstanding amounts, losses, Charges and obligations arising before or as a result of an Event of Default.

10.8 The Company's rights under this Clause are cumulative, may be exercised separately or together, and shall remain effective following termination of this Agreement.`,
      },
      {
        heading: 'Section A · 11. Force Majeure',
        content: `11.1 A "Force Majeure Event" means an event or circumstance beyond the Company's reasonable control that prevents, delays or materially affects the provision of the Services, the operation of the Trading Platform or the performance of the Company's obligations. A Force Majeure Event may include:

a) War, threatened war, terrorism, sabotage, civil unrest, riot, national emergency or political or economic crisis;

b) Earthquake, hurricane, storm, flood, fire, explosion, epidemic, pandemic or other natural disaster;

c) An action, restriction, prohibition, sanction, moratorium or decision imposed by a government, court, competent authority, exchange or self-regulatory body;

d) The suspension, closure, liquidation or disruption of an Underlying Market, exchange, trading venue, clearing system or settlement system;

e) The imposition of unusual trading conditions, price limits or restrictions, or the occurrence of extreme volatility, illiquidity, abnormal price movements or the unavailability of reliable market prices;

f) A breakdown, failure or interruption of electricity, telecommunications, internet services, price feeds, communication networks, computer systems, servers or the Trading Platform;

g) A cyberattack, distributed denial-of-service attack, malicious software or other security incident that occurs despite reasonable safeguards;

h) A strike, lockout or other labour dispute;

i) The failure or interruption of a bank, payment service provider, liquidity provider, execution venue, data provider, custodian, clearing house, technology provider or other third-party service provider; or j) Any comparable event that the Company could not reasonably prevent or overcome.

11.2 The Company may determine in good faith that a Force Majeure Event exists or is reasonably likely to occur. Where reasonably practicable and legally permitted, the Company will notify the Client of the event and any material action taken in response.

11.3 During a Force Majeure Event, the Company may, without prior notice where reasonably necessary:

a) Suspend, restrict or discontinue any part of the Services or Trading Platform;

b) Suspend trading in one or more Financial Instruments;

c) Reject new Orders or cancel Pending Orders;

d) Close, reduce or otherwise manage any Open Position at the price reasonably available at the relevant time;

e) Temporarily increase Margin Requirements, decrease leverage, widen Spreads or otherwise modify the applicable trading conditions;

f) Use an alternative source or method that it reasonably considers appropriate to determine a Quote or closing value;

g) Delay, restrict or refuse a deposit, withdrawal, refund or internal transfer;

h) Suspend or modify the application of a provision of this Agreement to the extent that compliance becomes impossible, unlawful or commercially impracticable; or i) Take or refrain from taking any other action reasonably considered necessary to protect the Company, its clients, service providers or the integrity of the Trading Platform.

11.4 The Company will consider the circumstances and the interests of affected clients when deciding which action to take but does not guarantee that losses will be prevented or limited.

11.5 To the maximum extent permitted by Applicable Law, the Company shall not be in breach of this Agreement or liable for any failure, interruption, delay, loss or damage resulting from a Force Majeure Event or from reasonable action taken in response to it. This limitation does not apply to the Company's fraud, wilful misconduct or gross negligence.

11.6 A Force Majeure Event does not release the Client from an obligation that arose before the event, including an obligation to pay an amount already due, unless the Company agrees otherwise in writing.

11.7 The Company will use reasonable efforts to restore the affected Services when it considers it safe, lawful and reasonably practicable to do so.

11.8 Nothing in this Clause creates or expands any Negative Balance Protection. Where Negative Balance Protection is expressly provided under this Agreement, its application during a Force Majeure Event shall be determined in accordance with the relevant Negative Balance Protection provisions.`,
      },
      {
        heading: 'Section A · 12. Liability and Indemnity',
        content: `12.1 The Client is responsible for all trading decisions, Orders, instructions and Transactions entered into through the Client Account, including those submitted by an Authorized Person or by using the Client's Access Data.

12.2 To the maximum extent permitted by Applicable Law, the Company shall not be liable for any loss, damage, cost or expense arising directly or indirectly from:

a) Movements in the price or value of a Financial Instrument or Underlying Asset;

b) The Client's trading decisions, Orders, Open Positions or reliance on a Stop-Loss Order, Take-Profit Order, Trailing Stop, Expert Advisor, Custom Indicator or other trading tool;

c) Slippage, Price Gaps, market volatility, insufficient liquidity, delayed execution or the unavailability of a requested price;

d) An interruption, delay, error or failure affecting the Trading Platform, Trading Server, internet connection, communication network, price feed, hardware, software or the Client's equipment;

e) The acts, omissions, insolvency, delay or failure of a bank, payment service provider, liquidity provider, execution venue, data provider, custodian, technology provider or other third party;

f) An inaccurate, delayed, incomplete or unavailable Quote, market information, research, news, commentary, analytical tool or third-party content;

g) An instruction, representation, action or omission of an Authorized Person, Introducer or other person acting for or appearing to act for the Client;

h) Unauthorized access to or use of the Client Account occurring before the Client notifies the Company of the loss, theft or misuse of the Client's Access Data;

i) The Client's failure to maintain suitable equipment, internet access, security protections or updated contact information;

j) Changes in currency exchange rates, taxation, Applicable Law or market rules;

k) Action taken by the Company to comply with Applicable Law, a court order, a competent authority or the requirements of a financial institution or payment service provider;

l) An Event of Default or breach of this Agreement by the Client; or m) A Force Majeure Event.

12.3 The Trading Platform, market information, analytical tools and related technology are made available on an "as available" basis. The Company does not guarantee that they will always be uninterrupted, secure, accurate, complete, current or free from error.

12.4 Except where prohibited by Applicable Law, the Company shall not be liable for any indirect, incidental, consequential, special, exemplary or punitive loss or damage, including loss of profit, revenue, opportunity, anticipated savings, business, goodwill or data, whether or not the possibility of such loss was known or reasonably foreseeable.

12.5 The Client shall indemnify and keep indemnified the Company, its Affiliates, directors, officers, employees, agents and service providers against any claim, liability, loss, damage, Charge, cost or reasonable legal expense arising from:

a) The Client's breach of this Agreement or an Event of Default;

b) Any false, inaccurate, incomplete or misleading information, document, representation or warranty provided by or on behalf of the Client;

c) The Client's fraud, negligence, wilful misconduct, unlawful activity or violation of Applicable Law;

d) An Order or instruction submitted by the Client, an Authorized Person or through the Client's Access Data;

e) Unauthorized account access resulting from the Client's failure to protect the Client's Access Data or devices;

f) A chargeback, payment dispute, returned payment or payment fraud connected with the Client Account;

g) A Prohibited Trading Practice or misuse of the Trading Platform, API or Services;

h) A claim by a third party resulting from the Client's conduct or use of the Services; or i) Reasonable action taken by the Company to enforce its rights under this Agreement.

12.6 The indemnity under Clause 12.5 shall not apply to the extent that the relevant claim, liability or loss was directly caused by the Company's fraud, wilful misconduct, gross negligence or breach of a duty that cannot lawfully be excluded.

12.7 Any amount payable by the Client under this Clause shall become due upon demand. The Company may deduct or set off that amount against funds held for or payable to the Client, subject to Applicable Law.

12.8 The obligations of the Company under this Agreement are obligations of Movement Markets Ltd only. No director, officer, employee, shareholder, Affiliate, agent or service provider shall have personal liability to the Client solely because of their relationship with the Company, except where Applicable Law provides otherwise.

12.9 Nothing in this Agreement excludes or limits liability for fraud, wilful misconduct, gross negligence or any liability, right or remedy that cannot lawfully be excluded or limited.

12.10 This Clause shall remain effective after the termination of this Agreement.`,
      },
      {
        heading: 'Section A · 13. Representations and Warranties',
        content: `13.1 The Client represents and warrants to the Company that:

a) If the Client is a natural person, the Client is at least eighteen (18) years old, has full legal capacity and is legally permitted to enter into this Agreement;

b) If the Client is a legal entity, it is validly established, registered and existing under the laws applicable to it and has full power and authority to enter into and perform this Agreement;

c) Any person completing the Account Opening Application Form, accepting this Agreement or giving instructions on behalf of the Client is properly authorized to do so;

d) This Agreement constitutes valid and binding obligations of the Client;

e) Entering into and performing this Agreement does not violate any law, court order, constitutional document, contract or obligation applicable to the Client;

f) All information and documentation provided by or on behalf of the Client is complete, accurate, authentic, current and not misleading;

g) The Client has read, understood and accepted this Agreement and the legal documents incorporated into it;

h) Unless otherwise disclosed to and approved by the Company in writing, the Client acts as principal and not as an agent, representative, trustee, nominee, custodian or intermediary for another person;

i) The Client is the beneficial owner of all funds deposited into the Client Account and of the economic interest in Transactions entered into through that Client Account, unless the Company has approved otherwise in writing;

j) All funds and assets used in connection with the Services are lawfully obtained, are not the proceeds of criminal activity and are not intended to finance terrorism, evade sanctions or support any unlawful activity;

k) The funds and assets provided by the Client are free from any lien, charge, pledge, security interest or third-party claim, except where disclosed to and accepted by the Company;

l) The Client has accurately disclosed whether the Client or any related person is a Politically Exposed Person;

m) Neither the Client nor, where applicable, any director, beneficial owner, controlling person, Authorized Person or person acting on the Client's behalf is subject to sanctions or restrictions that would prohibit or restrict the Company from providing the Services;

n) The Client's use of the Services is lawful in the Client's country of residence, citizenship and any other jurisdiction applicable to the Client;

o) The Client has obtained all approvals, licences, consents and permissions necessary to enter into this Agreement and use the Services;

p) The Client will use the Services, Trading Platform, Quotes and market information only for lawful purposes and in accordance with this Agreement;

q) The Client will not redistribute, publish, commercially exploit or otherwise use the Company's Quotes or market information except for the Client's own trading purposes, unless the Company has approved otherwise in writing;

r) The Client will not engage in fraud, market manipulation, insider dealing, a Prohibited Trading Practice or conduct intended to create a false or misleading appearance of market activity;

s) The Client will not use any device, software, algorithm, strategy or arrangement to unfairly exploit the Company's pricing, execution systems, Trading Platform or risk-management protections; and t) Where the Client is subject to employment, professional or regulatory restrictions concerning personal trading, the Client has disclosed those restrictions and obtained all necessary approvals.

13.2 Where the Client is a legal entity, partnership, trust or similar arrangement, the Client further represents and warrants that:

a) Its constitutional, partnership or trust documents are valid and remain in effect;

b) The Client and each person acting for it have the necessary authority to enter into Transactions and perform the Client's obligations;

c) All required corporate, partnership, trustee, shareholder or other approvals have been obtained;

d) The Company has been provided with complete and accurate information concerning the Client's ownership, control and beneficial owners; and e) No action has been taken or proposed for its dissolution, liquidation, administration or termination except as disclosed to the Company.

13.3 Throughout the term of this Agreement, the Client undertakes to:

a) Maintain all authority, approvals, licences and consents necessary to perform this Agreement;

b) Promptly notify the Company of any change that makes a representation or warranty under this Clause inaccurate or incomplete;

c) Immediately notify the Company if the Client or a related person becomes subject to sanctions, criminal investigation, insolvency proceedings or Politically Exposed Person status;

d) Notify the Company of any Event of Default or circumstance reasonably likely to become an Event of Default;

e) Provide information and documentation reasonably requested by the Company to verify compliance with this Clause;

f) Cooperate with any compliance, payment, security or trading investigation conducted by the Company; and g) Refrain from using the Services in a manner that could cause the Company or any service provider to breach Applicable Law.

13.4 The representations and warranties in this Clause shall be treated as repeated whenever the Client places an Order, enters into a Transaction, gives an instruction, deposits or withdraws funds, and for as long as any obligation or Open Position remains outstanding.

13.5 The Company enters into this Agreement and provides the Services in reliance upon these representations and warranties. Any material breach of this Clause shall constitute an Event of Default.`,
      },
      {
        heading: 'Section A · 14. Client Acknowledgements of Risk and Consents',
        content: `14.1 The Client acknowledges and accepts that CFDs and other derivative products offered by the Company are complex, speculative and highly risky and may not be suitable for every person. In particular:

a) Leverage may substantially increase both profits and losses, and a small movement in the price of an Underlying Asset may cause a significant change in the value of a Position;

b) The Client may lose all funds deposited in the Client Account and may, where Negative Balance Protection does not expressly apply, become liable for additional amounts;

c) Market volatility, insufficient liquidity, price gaps, slippage, delayed execution or suspension of trading may prevent an Order from being executed at the requested or displayed price;

d) A Stop Loss, Take Profit, Margin Call or Stop-Out mechanism does not guarantee that a Position will be closed at a particular price or that losses will be limited;

e) Commissions, spreads, swaps, financing charges, currency-conversion costs and other Charges may reduce any profit or increase any loss;

f) Electronic trading involves risks arising from internet failures, communication delays, hardware or software faults, cyber incidents, system interruptions and the failure of third-party service providers; and g) Past performance, market analysis, forecasts, trading signals or historical prices do not guarantee future results.

14.2 The Client understands that, unless expressly stated otherwise in the applicable Contract Specifications:

a) A CFD does not provide the Client with ownership, delivery, voting rights or any other direct interest in the Underlying Asset;

b) CFD Transactions are settled by reference to changes in the price or value of the relevant Underlying Asset;

c) CFDs are generally entered into over the counter and are not traded or cleared on a regulated exchange; and d) The Client may be unable to close an Open Position at the preferred time, price or amount.

14.3 The Client is solely responsible for determining whether the Services and each Transaction are appropriate for the Client's objectives, financial circumstances, knowledge, experience and tolerance for risk. The Client should obtain independent financial, legal or tax advice where necessary.

14.4 The Company is not required to:

a) Monitor the Client Account, Margin Level or Open Positions on the Client's behalf;

b) Advise the Client of an adverse market movement;

c) Prevent the Client from trading beyond the Client's financial means;

d) Issue a Margin Call before applying Stop-Out or exercising any other right under this Agreement; or e) Close a Position for the purpose of protecting the Client from loss.

The Client remains responsible for monitoring the Client Account and maintaining sufficient Margin at all times.

14.5 The Client authorizes the Company, where permitted by this Agreement, to reject or cancel Orders, adjust Margin or leverage, close Open Positions, apply Stop-Out, suspend trading or take other protective action without obtaining additional consent from the Client.

14.6 The Client consents to receiving this Agreement, the Risk Disclosure Notice, Contract Specifications, policies, notices, statements, Transaction confirmations, changes to Charges and other information electronically through the Website, Personal Area, Trading Platform, email or another electronic method used by the Company.

14.7 The Client confirms that they have regular access to the internet and suitable equipment for receiving electronic communications. The Client is responsible for regularly checking the Website, Personal Area, Trading Platform and registered email address for information and notices from the Company.

14.8 The Client agrees that electronic acceptance of this Agreement, use of the Client Account or placement of an Order shall have the same effect as a handwritten signature, to the extent permitted by Applicable Law. Electronic records maintained by the Company may be used as evidence of the Client's acceptance, communications, Orders and Transactions.

14.9 The Company does not represent or guarantee that the Client will make a profit, avoid a loss or achieve any particular trading result. No statement made by the Company, an employee, Affiliate, Introducer or service provider shall constitute such a guarantee.

14.10 The risks described in this Agreement and the Risk Disclosure Notice are not exhaustive. New or previously unidentified risks may arise, and market conditions may change rapidly. The Client must trade only after understanding the nature of the relevant products and the extent of the Client's financial exposure.

14.11 By placing each Order, the Client confirms that they:

a) Have independently assessed the Transaction and its risks;

b) Have sufficient knowledge and financial resources to enter into the Transaction;

c) Are able to bear the potential loss arising from the Transaction; and d) Accept full responsibility for the trading decision.`,
      },
      {
        heading: 'Section A · 15. Complaints and Dispute Resolution',
        content: `15.1 A Client who is dissatisfied with any aspect of the Services may submit a written complaint through the contact details or complaint channel specified on the Company's Website.

15.2 The complaint should include the Client's name, Client Account number, relevant Order or Transaction details, a description of the complaint and any supporting evidence.

15.3 The Company will investigate the complaint fairly and provide a written response within a reasonable period. The Company may request additional information or documents from the Client where necessary.

15.4 If the complaint is not resolved, the Parties shall first attempt to settle the dispute through good-faith discussions. Where an independent dispute-resolution body is available under Applicable Law, the Company will provide the relevant details to the Client.

15.5 Submitting a complaint does not suspend the Client's obligations or prevent the Company from exercising its rights under this Agreement, including applying Margin, Stop-Out or account-security measures.

15.6 Any dispute that remains unresolved shall be handled in accordance with Clause 16 of Section A, Governing Law and Jurisdiction.`,
      },
      {
        heading: 'Section A · 16. Governing Law and Jurisdiction',
        content: `16.1 This Agreement shall be governed by the laws of Saint Lucia, and the Parties submit to the non-exclusive jurisdiction of the courts of Saint Lucia.

16.2 The Company may take any action reasonably necessary to comply with Applicable Law, regulatory requirements and relevant market rules.`,
      },
      {
        heading: 'Section A · 17. Severability',
        content: `17.1 If any provision of this Agreement is found to be illegal, invalid or unenforceable, it shall be modified to the minimum extent necessary to make it enforceable. If modification is not possible, that provision shall be treated as removed.

17.2 The remaining provisions shall continue in full force, and the invalidity of a provision in one jurisdiction shall not affect its validity in another jurisdiction.`,
      },
      {
        heading: 'Section A · 18. Non-waiver',
        content: `18.1 Any failure or delay by the Company in exercising a right or remedy under this Agreement shall not constitute a waiver of that right or remedy.

18.2 A single or partial exercise of a right shall not prevent its further exercise or the exercise of any other right. Any waiver by the Company must be expressly given in writing and shall apply only to the specific matter for which it is given.

18.3 The Company's rights and remedies under this Agreement are cumulative and do not exclude any rights available under Applicable Law.`,
      },
      {
        heading: 'Section A · 19. Language',
        content: `19.1 The official language of the Company and this Agreement is English. Any translation is provided for convenience only.

19.2 If there is any difference or inconsistency between the English version and a translated version, the English version shall prevail.

19.3 The Client confirms that they understand English or have obtained independent assistance to understand this Agreement. The Company may communicate in another language but is not required to continue doing so.`,
      },
      {
        heading: 'Section A · 20. Introducers',
        content: `20.1 The Client may have been referred to the Company by an Introducer. The Introducer is independent and is not an employee, agent or representative of the Company and has no authority to bind the Company.

20.2 The Company shall not be responsible for any advice, representation, promise, act or omission of an Introducer. Any separate agreement between the Client and an Introducer shall not bind the Company.

20.3 An Introducer is not authorized to guarantee profits, accept Client funds, operate the Client Account or receive the Client's Access Data unless expressly approved by the Company in writing.

20.4 The Company may pay an Introducer commissions, rebates or other benefits based on the Client's activity, as permitted by Applicable Law. Further information will be disclosed where required.

20.5 Ending the relationship between the Client and an Introducer shall not terminate or otherwise affect this Agreement.`,
      },
      {
        heading: 'Section A · 21. Identification and Electronic Verification',
        content: `21.1 The Company may verify the Client's identity using electronic verification systems, external databases and third-party service providers.

21.2 The Client authorizes the Company to collect, use and disclose identification details and documents for verification, fraud prevention, sanctions screening and compliance purposes, in accordance with the Privacy Policy and Applicable Law.

21.3 The Company may request additional, updated, certified or original documents and may repeat verification checks at any time.

21.4 The Client must provide accurate and authentic information. Providing false, misleading or fraudulent information shall constitute an Event of Default.

21.5 If verification cannot be completed to the Company's satisfaction, the Company may reject the application, restrict the Client Account, refuse a Transaction or payment, return funds to their source or terminate the Agreement.`,
      },
      {
        heading: 'Section A · 22. Currency Conversion',
        content: `22.1 The Company may convert any amount held, received or payable under this Agreement into the currency of the Client Account or any other currency required for a Transaction, payment or set-off.

22.2 Currency conversions will be made at a rate determined by the Company using available market or payment-provider rates. The Company may apply a conversion fee or markup.

22.3 The Client shall bear all conversion costs and the risk of exchange-rate movements. The conversion rate may differ from rates displayed by banks or other providers.

22.4 The Company may decline or delay a currency conversion where the relevant currency, rate or payment service is unavailable or where required for compliance or risk-management purposes.`,
      },
      {
        heading: 'Section A · 23. Further Acts and Miscellaneous',
        content: `23.1 The Client shall provide information or documents and complete any reasonable steps requested by the Company to give effect to this Agreement or confirm compliance with it.

23.2 Nothing in this Agreement creates a partnership, joint venture, agency, employment or fiduciary relationship between the Parties. The Client may not act or make commitments on behalf of the Company.

23.3 Neither Party may use the other Party's name, trademarks or intellectual property without prior written consent.

23.4 The Client accepts this Agreement by electronically confirming acceptance, submitting an Account Opening Application Form, opening or using a Client Account, or using the Services. Such acceptance shall have the same effect as a signature.

23.5 This Agreement and the documents incorporated into it constitute the entire agreement between the Parties concerning the Services.`,
      },
      {
        heading: 'Section B · 1. Client Account',
        content: `1.1 Following approval of the Client's application and completion of the Company's verification requirements, the Company may open one or more Client Accounts for the Client.

1.2 The Company may offer different account types, currencies, trading conditions, execution methods and minimum-deposit requirements. The applicable features will be displayed on the Website, Personal Area or Trading Platform.

1.3 The Company may introduce, change or discontinue an account type or any of its features. The Client will be notified of any material change where reasonably practicable.

1.4 A Client Account is personal to the Client and may not be transferred, sold, shared or operated by another person without the Company's prior written approval.

1.5 The Company may refuse to open additional or duplicate accounts and may restrict or close accounts connected with fraud, Prohibited Trading Practices, an Event of Default or a previously restricted Client.

1.6 Any profit or loss resulting from trading shall be credited or debited to the Client Account once the relevant Transaction is closed. Charges, payments and other adjustments shall be recorded when applicable. The Company's account records shall be evidence of the Client's activity and Balance unless a clear error is established.

1.7 Opening a Client Account does not give the Client a permanent right to a particular account type, currency, feature or Trading Platform.`,
      },
      {
        heading: 'Section B · 2. Client Money',
        content: `2.1 Funds received from the Client will be credited to the Client Account after they have been cleared, reconciled and accepted by the Company.

2.2 The Company may hold Client Money with banks, payment service providers, liquidity providers, custodians, Affiliates or other third parties within or outside Saint Lucia. Such money may be held in pooled or omnibus accounts.

2.3 The Company will maintain records showing the amount attributable to each Client and may apply Client Money toward Transactions, Margin, Charges, settlements or other amounts due under this Agreement.

2.4 Profit or loss on an Open Position will be shown as floating profit or loss. Once the Position is closed, the final profit or loss will be credited or debited to the Client Account, subject to applicable Charges and adjustments.

2.5 Unless expressly agreed otherwise, no interest shall be payable to the Client on Client Money.

2.6 Client Money may be subject to the laws, insolvency rules, security interests or set-off rights applicable to a third-party holder. Unless expressly confirmed, it is not protected by a deposit-insurance or investor-compensation scheme.

2.7 The Company shall not be responsible for a third party's failure except where directly caused by the Company's fraud, wilful misconduct or gross negligence.`,
      },
      {
        heading: 'Section B · 3. Deposits, Withdrawals and Refunds',
        content: `3.1 The Client may deposit and withdraw funds using the payment methods available in the Personal Area.

The Company may change the available methods, currencies, limits and requirements at any time.

3.2 Payments must be made through an account or payment method held in the Client's name. The Company may reject or return anonymous or third-party payments to their source.

3.3 The Client Account will be credited only with the amount actually received and cleared by the Company, after deducting any applicable Charges.

3.4 The Company may request information or documents confirming the ownership, source or purpose of funds and may delay or reject a payment until its checks have been completed.

3.5 Withdrawals must be requested through the Personal Area and may only be made from funds that are not required for Margin, Charges or other obligations owed to the Company.

3.6 The Company may return funds through the original payment method. Where several methods were used, withdrawals may be processed proportionally or in an order determined by the Company.

3.7 The Company may delay, reject or cancel a withdrawal where:

a) The Client's information or documents are incomplete or outdated;

b) Sufficient free funds are unavailable;

c) Fraud, unlawful activity, a chargeback or an Event of Default is suspected;

d) The Client Account is restricted or under investigation;

e) A payment provider is unavailable; or f) The action is required by Applicable Law or for security or compliance purposes.

3.8 The Client shall bear all bank, payment-provider, conversion and processing fees. The Company is not responsible for delays occurring after funds have been transferred to a payment provider.

3.9 If funds are credited by mistake, duplicated, reversed or subject to a chargeback, the Company may debit the Client Account, cancel the credit, restrict the Client Account, close Open Positions or recover the amount from the Client.

3.10 If the Company mistakenly transfers funds to an incorrect trading account during an internal transfer between the Client's accounts, the Company shall correct the transfer and restore the affected amount at its own expense.

3.11 A withdrawal may reduce the Client's Equity and Margin Level. The Client is responsible for ensuring that sufficient Margin remains available after submitting a withdrawal request.`,
      },
      {
        heading: 'Section B · 4. Lien and Security',
        content: `4.1 The Company shall have a general lien over all funds, balances and other assets held by the Company, its Affiliates or service providers on the Client's behalf until all obligations owed by the Client have been fully satisfied.

4.2 The lien shall cover all present, future, actual or contingent liabilities, including Charges, losses, chargebacks, payment reversals, indemnities, damages and compliance-related claims.

4.3 The Company may retain such funds or assets, restrict withdrawals and enforce its lien without prior notice where an amount becomes due or where reasonably necessary to protect a legally binding claim.

4.4 The Client may not assign, pledge or grant any security interest over funds or rights connected with the Client Account without the Company's prior written consent.

4.5 The Company's rights under this Clause shall continue after termination of the Agreement.`,
      },
      {
        heading: 'Section B · 5. Netting, Lien and Set-off',
        content: `5.1 The Company shall have a general lien over all funds, balances and other assets held by the Company or its service providers on the Client's behalf until all obligations owed by the Client have been fully satisfied.

5.2 Where the Company and the Client owe amounts to each other, those obligations may be combined and set off. If the amounts are equal, they shall cancel each other. If one amount is greater, the Party owing the larger amount shall pay only the remaining difference.

5.3 The Company may combine or consolidate any Client Accounts held in the Client's name and apply a credit balance in one Client Account against a debit balance or other liability in another Client Account.

5.4 To the extent permitted by Applicable Law, the Company may, without further authorization from the Client:

a) Deduct any amount owed by the Client from funds held for or payable to the Client;

b) Transfer funds between the Client's Accounts;

c) Convert funds from one currency into another at the applicable conversion rate;

d) Close any Open Position and apply the proceeds toward the Client's obligations; and e) Retain funds reasonably required to satisfy present, pending or legally binding future liabilities.

5.5 The Company may exercise its rights under this Clause before returning funds to the Client, following an Event of Default, upon termination of the Agreement or whenever an amount owed by the Client becomes due.

5.6 Any deposit, Margin or other amount held for the Client shall not become repayable until the Client's obligations under this Agreement have been fully satisfied.

5.7 This Clause shall remain effective after termination of the Agreement and shall bind the Parties and, where applicable, their estates, successors, representatives and creditors.`,
      },
      {
        heading: 'Section B · 6. Temporary Restrictions and Account Blocking',
        content: `6.1 The Company may restrict or temporarily block a Client Account without prior notice where:

a) An Event of Default has occurred or is suspected;

b) The Client's information or verification is incomplete or outdated;

c) The Client's Access Data may have been compromised;

d) Fraud, unlawful activity, suspicious trading or a chargeback is suspected;

e) A payment, transfer or account error requires investigation;

f) A Force Majeure Event or technical issue has occurred;

g) The Company receives a request from a competent authority or service provider; or h) The restriction is reasonably necessary to protect the Client, the Company or the integrity of the Services.

6.2 While an account is restricted, the Company may reject Orders, restrict deposits or withdrawals, close or manage Open Positions and request additional information or documents.

6.3 The Client may request that the Company temporarily block the Client Account if unauthorized access or misuse is suspected. The Company may require identity verification before acting on the request.

6.4 The Company may remove the restriction when it is satisfied that the relevant issue has been resolved.

If the matter cannot be resolved, the Company may close the Client Account and terminate the Agreement.

6.5 The Company may retain funds reasonably required to cover pending chargebacks, payment reversals, legal claims or other legally binding liabilities.

6.6 The Company shall not be liable for losses resulting from a restriction reasonably imposed under this Clause, except where caused by its fraud, wilful misconduct or gross negligence.`,
      },
      {
        heading: 'Section B · 7. Dormant and Archived Accounts',
        content: `7.1 The Company may classify a Client Account as dormant where it has no Open Positions and no trading, deposit, withdrawal or internal-transfer activity for the period specified on the Website or in the Personal Area.

7.2 The Company may archive a dormant account, cancel its Pending Orders and restrict access to certain account features or Services.

7.3 A dormant-account or administration fee may be charged where it is disclosed on the Website, Personal Area or applicable fee schedule.

7.4 The Client may request reactivation or withdrawal of the remaining Balance, subject to identity verification, updated due-diligence requirements and the Company's rights of lien and set-off.

7.5 The Company may close or classify an archived account as non-restorable. Any funds remaining due to the Client shall continue to be recorded and handled in accordance with Applicable Law.

7.6 The Company may retain the account's trading history, communications and other records for the period required by Applicable Law or its record-retention policies.`,
      },
      {
        heading: 'Section B · 8. Negative Balance Protection and Account Adjustments',
        content: `8.1 Negative Balance Protection shall apply only where the Company expressly confirms that it is available for the relevant Client Account and subject to the conditions published on the Website or in the Personal Area.

8.2 Where Negative Balance Protection applies, the Company may adjust an eligible negative Balance to zero after all Open Positions have been closed and all Transactions, Charges and payment operations have been reconciled.

8.3 A negative Balance may remain visible temporarily while the Company completes its calculations and checks.

8.4 Negative Balance Protection shall not apply to losses or liabilities resulting from:

a) Fraud, unlawful activity or an Event of Default;

b) Prohibited Trading Practices or abuse of the protection;

c) A chargeback, payment reversal or unpaid Charge;

d) Incorrect information or instructions provided by the Client; or e) Any other exclusion stated in the applicable Negative Balance Protection policy.

8.5 Negative Balance Protection does not prevent the Company from applying Stop-Out, closing Open Positions, exercising its rights of set-off or recovering non-trading debts owed by the Client.

8.6 The Company may debit, credit, reverse or otherwise correct the Client Account where an adjustment is required because of a manifest pricing error, incorrect Quote, system error, duplicate or mistaken credit, payment reversal, Corporate Action or similar event.

8.7 The Company will notify the Client of a material adjustment where reasonably practicable. The Company's corrected records shall apply unless the Client establishes a clear error.`,
      },
      {
        heading: 'Section C · 1. Trading Platform',
        content: `1.1 The Company grants the Client a limited, personal, non-exclusive, non-transferable and revocable right to access and use the Trading Platform solely for the Client's own Transactions.

1.2 The Trading Platform may allow the Client to view Quotes, place or manage Orders, monitor Open Positions, review account information and receive communications from the Company.

1.3 The Company may provide different platforms, applications, features or versions and may modify, update, replace or discontinue any of them at any time.

1.4 The Client must follow the Company's instructions and use a compatible and updated device, operating system, software and internet connection.

1.5 An Order submitted through the Trading Platform shall not be considered accepted or executed until it has been received and confirmed by the Company's Trading Server.

1.6 If there is a difference between information displayed on the Client's device and the Company's records, the Company's Trading Server records shall prevail unless a clear error is established.`,
      },
      {
        heading: 'Section C · 2. Technical Issues and System Disruption',
        content: `2.1 The Client is responsible for obtaining and maintaining suitable equipment, software, internet access and security protection required to use the Trading Platform.

2.2 The Company does not guarantee that the Trading Platform will always be available, uninterrupted, secure or free from errors, delays or technical failures.

2.3 The Company may suspend or restrict the Trading Platform for scheduled maintenance, emergency repairs, security reasons or circumstances beyond its reasonable control, with or without prior notice.

2.4 During a technical issue or system disruption, the Company may:

a) Suspend or limit trading;

b) Stop providing Quotes;

c) Reject, delay or cancel Orders;

d) Change the available execution method;

e) Close or manage Open Positions where reasonably necessary; or f) Use an alternative or backup system.

2.5 An instruction shall not be effective until received by the Company. The Client must confirm the status of an Order before submitting it again, as a repeated instruction may result in a duplicate Transaction.

2.6 The Company may, but is not required to, accept instructions through an alternative communication method during a disruption.

2.7 The Company shall not be liable for losses caused by the Client's equipment, internet connection, third-party systems or circumstances beyond the Company's reasonable control, except where caused by the Company's fraud, wilful misconduct or gross negligence.`,
      },
      {
        heading: 'Section C · 3. Prohibited Trading Practices',
        content: `3.1 The Client must not use the Trading Platform, Client Account or Services for any unlawful, fraudulent, manipulative or abusive purpose.

3.2 Prohibited Trading Practices include:

a) Gaining or attempting to gain unauthorized access to the Trading Platform, another account or the Company's systems;

b) Bypassing security controls, reverse-engineering software or interfering with the operation of the Trading Platform;

c) Introducing viruses, malicious code or excessive Orders or requests that may damage, disrupt or overload the Company's systems;

d) Copying, scraping, storing, selling or redistributing Quotes, market data or platform information for any purpose other than the Client's personal trading;

e) Claiming bonuses, rebates or promotional benefits through multiple accounts, identities or accounts controlled by the same person;

f) Using hedged, offsetting or substantially risk-free Transactions solely to satisfy a trading-volume or turnover requirement;

g) Repeatedly depositing funds, claiming a benefit, completing minimal trading activity and withdrawing the funds;

h) Using internal transfers to reset Margin, unlock a benefit or avoid an account or promotional limit;

i) Coordinating with another Client or group of clients to guarantee or arrange a promotional payout;

j) Exploiting delayed, frozen, incorrect, stale or off-market Quotes, pricing errors, system errors, feed outages or execution delays;

k) Closing more than 30% of Client-initiated Completed Transactions within 60 seconds of opening where the intent or effect is to exploit pricing, ticks, stale Quotes or execution latency;

l) Engaging in latency arbitrage, quote sniping, tick scalping or the exploitation of temporary spread or liquidity irregularities;

m) Systematically exploiting slippage, requotes or other execution mechanics;

n) Deliberately targeting rollover, market openings, weekend gaps, news releases or thin-liquidity periods to exploit an identifiable pricing or execution anomaly;

o) Concentrating activity in illiquid or low-volume Financial Instruments for the purpose of influencing or exploiting pricing;

p) Holding coordinated opposing Positions in the same or correlated Financial Instruments across accounts controlled by the Client to avoid genuine market risk or exploit differences in spreads, commissions, swaps or execution;

q) Coordinating opposing, matched, mirrored or near-simultaneous Transactions with another Client or group of clients;

r) Exploiting a delay, error or temporary discrepancy between the Company's pricing and an external venue, feed or broker;

s) Manipulating the price, liquidity or demand for a Financial Instrument or trading using inside information;

t) Using an Expert Advisor, bot, script, plugin, bridge, API or modified terminal designed or configured to exploit pricing, latency or execution;

u) Using automated systems that generate excessive Orders, mass cancellations, requests or server load;

v) Conducting copy trading, signal mirroring or bridged execution between accounts without any disclosure or approval required by the Company;

w) Conducting coordinated group activity intended to transfer risk to the Company while securing a guaranteed or substantially risk-free return to the group;

x) Acting for an undisclosed principal or operating as a money manager without the Company's written approval and any authorization required by Applicable Law;

y) Abusing Negative Balance Protection, swap-free conditions, bonuses, rebates, cashback, loyalty benefits or Introducer commissions;

z) Allowing another person to operate the Client Account or trading for another person without the Company's written approval;

aa) Opening or using multiple accounts, identities, devices or payment methods to avoid restrictions or conceal connected activity;

bb) Making fraudulent deposits, withdrawals, chargebacks or payment reversals; or cc) Engaging in any other activity that the Company reasonably considers deceptive, abusive or inconsistent with genuine trading activity.

Short-duration trading, hedging, automated trading or arbitrage shall not be prohibited solely because of its name or duration unless it forms part of an abusive practice described above.

3.3 The Company may consider common ownership, identification details, devices, IP addresses, locations, payment methods, trading patterns, Order timing, pricing and communications when determining whether accounts or Clients are connected. No single factor shall necessarily be conclusive by itself.

3.4 Where the Company reasonably suspects a Prohibited Trading Practice, it may:

a) Investigate and restrict the relevant Client Accounts;

b) Reject, cancel, delay, reverse or adjust affected Orders and Transactions;

c) Recalculate affected Transactions using an appropriate market or reference price;

d) Reverse internal transfers;

e) Remove profits, rebates, commissions, bonuses or other benefits resulting from the prohibited activity;

f) Change leverage, Margin requirements or execution conditions;

g) Suspend automated trading, API access or access to the Trading Platform;

h) Close Open Positions or Client Accounts;

i) Delay withdrawals and exercise its rights of lien and set-off;

j) Recover losses, Charges and reasonable investigation costs; or k) Report the activity to a competent authority or affected service provider.

3.5 The Company may apply these measures to all connected accounts and may return only the verified original deposits after deducting valid losses, Charges and amounts owed to the Company.

3.6 The Company will notify the Client of material action taken under this Clause where permitted by Applicable Law and reasonably practicable.`,
      },
      {
        heading: 'Section C · 4. Security of Access Data',
        content: `4.1 The Client must keep all usernames, passwords, security codes, API keys, tokens and other Access Data confidential and secure and must not disclose them to any unauthorized person.

4.2 The Company may treat any Order, instruction or activity completed using the Client's Access Data as having been authorized by the Client, without making further enquiries.

4.3 The Client must immediately notify the Company if Access Data is lost, disclosed, compromised or used without authorization and must change the affected credentials where possible.

4.4 The Company may suspend access, revoke or replace Access Data, require additional verification or apply other security measures where unauthorized access or a security risk is suspected.

4.5 The Client shall be responsible for activity completed using their Access Data before the Company receives and acts upon notice of suspected misuse, except where the loss was directly caused by the Company's fraud, wilful misconduct or gross negligence.

4.6 The Client must not provide Access Data to an Introducer, account manager, trading service, signal provider or money manager unless that person has been formally authorized and approved by the Company.

4.7 The Company's security measures reduce but cannot completely eliminate the risk of unauthorized access. The Client remains responsible for securing their devices, email accounts and communication channels.`,
      },
      {
        heading: 'Section C · 5. Intellectual Property',
        content: `5.1 All rights in the Website, Trading Platform, software, systems, market data, Quotes, content, documents, trademarks and logos belong to the Company or its licensors.

5.2 The Client receives only a limited, personal, non-exclusive, non-transferable and revocable right to use the Trading Platform and related materials for the Services.

5.3 The Client must not copy, modify, reproduce, publish, distribute, sell, license, reverse-engineer or commercially exploit any part of the Company's or its licensors' intellectual property without prior written consent.

5.4 Quotes, price feeds and market data may be used only for the Client's personal trading with the Company and may not be stored, redistributed or used through another platform or service without approval.

5.5 The Client may not use the Company's name, trademarks, logos or branding in a manner that suggests sponsorship, partnership or authorization.

5.6 The Company may suspend or terminate the Client's right to use the relevant materials where this Clause is breached. These obligations shall continue after termination of the Agreement.`,
      },
      {
        heading: 'Section D · 1. Order Placement and Execution',
        content: `1.1 The Client may place Orders through the Trading Platform or another method expressly approved by the Company.

1.2 The Company may rely upon and act on any Order submitted using the Client's Access Data. Such an Order shall be treated as authorized by and binding upon the Client.

1.3 An Order is a request to enter into a Transaction and shall not be considered accepted or executed until it is recorded as executed by the Company's Trading Server.

1.4 Depending on the Financial Instrument, account type and execution arrangement, the Company may execute an Order as principal or transmit or arrange the Order for execution through a third party.

1.5 The Company may execute an Order in full or in part and may aggregate, split or route Orders where reasonably necessary for execution.

1.6 Execution is subject to available prices, liquidity and market conditions. The execution price may differ from the requested or displayed price because of Slippage, volatility, Price Gaps, latency or other market factors.

1.7 Once executed, a Transaction is binding and may not be cancelled or modified by the Client unless expressly permitted by the Company or the Trading Platform.

1.8 The Client is responsible for monitoring the status of Orders and Open Positions and must promptly inform the Company of any suspected error or unauthorized Transaction.

1.9 The Company's Trading Server records shall be evidence of Orders and Transactions unless a clear error is established.`,
      },
      {
        heading: 'Section D · 2. Rejection, Cancellation and Modification of Orders',
        content: `2.1 The Company may reject, delay, cancel or refuse to execute an Order where:

a) The relevant market is closed, suspended or affected by abnormal conditions;

b) A reliable Quote or sufficient liquidity is unavailable;

c) The Client has insufficient Free Margin;

d) The Order exceeds an applicable size, exposure or trading limit;

e) The requested price is no longer available or is based on an incorrect, stale or off-market Quote;

f) The Client submits an unreasonable or excessive number of Orders or requests;

g) A technical, communication or third-party system failure occurs;

h) The Client Account is restricted, closed or subject to an Event of Default;

i) Prohibited Trading Practices are suspected;

j) The Order would breach Applicable Law or a regulatory requirement; or k) Rejection is reasonably necessary for the Company's compliance, security or risk management.

2.2 The Company will notify the Client of a rejection or cancellation where reasonably practicable but is not required to provide a reason where restricted by Applicable Law or security requirements.

2.3 A request by the Client to cancel or modify an Order shall not be effective unless it is received and accepted by the Company before the Order is executed.

2.4 The Company may cancel Pending Orders where the Financial Instrument expires, trading is suspended, Contract Specifications change or a Corporate Action affects the relevant Underlying Asset.

2.5 Where a Transaction was executed because of a manifest pricing, system or execution error, the Company may cancel it or adjust it using a fair market or reference price.

2.6 The Company shall not be liable for losses resulting from action reasonably taken under this Clause, except where caused by its fraud, wilful misconduct or gross negligence.`,
      },
      {
        heading: 'Section D · 3. Margin Requirements',
        content: `3.1 The Client must deposit and maintain sufficient Initial Margin, Necessary Margin, Hedged Margin and any other Margin required by the Company for all Orders and Open Positions.

3.2 Without notice or demand from the Company, the Client must maintain sufficient Equity to satisfy the Margin Requirements calculated by the Company at all times. The Client is responsible for understanding how Margin, Equity, Free Margin and Margin Level are calculated.

3.3 Margin Requirements will be displayed in the Contract Specifications, Personal Area or Trading Platform and may differ according to the Financial Instrument, account type, Transaction Size, leverage and market conditions.

3.4 Margin Requirements may change continuously, including during weekends, holidays and other non-trading periods. The Company may consider:

a) The Client's Open Positions and total exposure;

b) Market and instrument volatility;

c) Liquidity and currency risk;

d) The Client's trading volume or changes in trading activity;

e) Concentrated exposure to a particular Financial Instrument; and f) Upcoming news, market closures or anticipated abnormal market conditions.

3.5 The Company may increase or decrease Margin Requirements, reduce leverage or require additional Margin for new Orders, Pending Orders or existing Open Positions. Where reasonably practicable, the Company will provide notice, but a change may take effect immediately where required for risk-management purposes.

3.6 Hedged or offsetting Positions may remain subject to Margin. Closing or reducing one side of a Hedged Position may immediately increase the Margin required for the remaining Position.

3.7 The Client is responsible for continuously monitoring the Client Account and must not rely upon receiving a Margin Call or other notice from the Company.

3.8 Funds shall count toward Margin only after they have been cleared and credited to the Client Account.

A pending deposit or transfer does not satisfy a Margin Requirement.

3.9 Any additional Margin requested by the Company must be provided within the stated period or, if no period is stated, immediately. One Margin request does not prevent the Company from making another request. Any additional time allowed by the Company must be confirmed in writing and shall not waive its rights.

3.10 If the Client fails to maintain sufficient Margin, the Company may reject new Orders, cancel Pending Orders, reduce leverage or close Open Positions without prior notice. Such failure may also constitute an Event of Default.`,
      },
      {
        heading: 'Section D · 4. Leverage',
        content: `4.1 Leverage allows the Client to control a Transaction larger than the Margin deposited and may significantly increase both profits and losses.

4.2 The available leverage may differ according to the Client Account, Financial Instrument, Transaction Size, trading volume, Client classification and market conditions.

4.3 The Company may apply fixed, variable, tiered or dynamic leverage and may set a maximum leverage for any Client Account or Financial Instrument.

4.4 The Company may increase, reduce or withdraw available leverage where reasonably necessary because of market volatility, upcoming news, market closures, concentrated exposure, changes in the Client's activity or other risk-management considerations.

4.5 A change in leverage may apply to new or existing Positions and may increase the required Margin. The Client is responsible for maintaining sufficient Margin following any change.

4.6 The availability of a particular leverage level is not guaranteed. The applicable leverage will be displayed in the Contract Specifications, Personal Area or Trading Platform.`,
      },
      {
        heading: 'Section D · 5. Stop Loss, Take Profit and Trailing Stop',
        content: `5.1 The Client may use Stop Loss, Take Profit and Trailing Stop functions where supported by the Trading Platform.

5.2 A Stop Loss or Take Profit is triggered when the applicable Company Quote reaches the specified level.

It does not guarantee execution at that exact price.

5.3 During volatility, Price Gaps or insufficient liquidity, an Order may be executed at the next available price, resulting in a larger loss or different profit than expected.

5.4 A Trailing Stop may operate through the Client's device or terminal and may stop functioning if the device, terminal, internet connection or Trading Platform is disconnected.

5.5 The Client is responsible for setting, monitoring and changing these instructions. The Company is not required to monitor them or notify the Client if they fail to operate.

5.6 The Company may reject, cancel or adjust an instruction where its level is invalid, trading is suspended, a Corporate Action occurs, the Financial Instrument expires or a manifest error exists.

5.7 The Company's Margin, Stop-Out and other risk-management procedures shall take priority over any Stop Loss, Take Profit or Trailing Stop instruction.

5.8 The Company shall not be liable for losses arising from the operation or failure of these functions, except where caused by its fraud, wilful misconduct or gross negligence.`,
      },
      {
        heading: 'Section D · 6. Trade Confirmations, Statements and Reporting',
        content: `6.1 The Company will provide the Client with electronic access to information concerning Orders, Transactions, Open Positions, Balance, Equity and account activity through the Trading Platform or Personal Area.

6.2 A confirmation will be made available for each executed Transaction. Failure or delay in receiving a confirmation does not cancel or invalidate the Transaction.

6.3 The Client must review all confirmations and account information and notify the Company in writing of any error or disagreement within two Business Days after the information is made available.

6.4 If the Client does not notify the Company within that period, the relevant confirmation or account record shall be treated as accepted, except in the case of a manifest error.

6.5 The Company may provide daily, monthly or other periodic account statements electronically and is not required to send paper statements.

6.6 The Company may correct a confirmation, statement or account record where an error, omission, incorrect Quote, payment reversal or adjustment is identified.

6.7 The Company's Trading Server and account records shall prevail over information stored on the Client's device unless a clear error is established.`,
      },
      {
        heading: 'Section E · 1. Cfd Order Execution',
        content: `1.1 The provisions of this Section apply specifically to Transactions in Contracts for Difference offered by the Company.

1.2 A CFD is an over-the-counter derivative settled by reference to the difference between the opening and closing value of an Underlying Asset. It does not provide ownership or delivery of the Underlying Asset.

1.3 A buy Order is generally opened at the Ask price and closed at the Bid price. A sell Order is generally opened at the Bid price and closed at the Ask price.

1.4 Depending on the applicable execution arrangement, the Company may execute a CFD as principal or transmit or arrange the Order for execution through a third party.

1.5 The Company may hedge a CFD Transaction with a liquidity provider or another counterparty but is not required to do so. The Client shall have no rights or obligations in relation to the Company's hedging arrangements.

1.6 The Client's profit or loss will be calculated using the difference between the opening and closing prices, the Transaction Size and any applicable Charges, financing, swaps or adjustments.

1.7 All CFD Orders remain subject to the execution, rejection, Margin and risk-management provisions contained elsewhere in this Agreement.`,
      },
      {
        heading: 'Section E · 2. Pricing, Quotes and Slippage',
        content: `2.1 The Company will provide Bid and Ask Quotes for the Financial Instruments available through the Trading Platform.

2.2 Quotes may be obtained from third-party pricing sources, liquidity providers, Underlying Markets or the Company's internal pricing systems and may include a Spread or markup determined by the Company.

2.3 The Company's Quotes may differ from prices displayed by an exchange, data provider, broker or other trading venue. The Company is not required to match an external price.

2.4 Quotes displayed on the Trading Platform are indicative until an Order is executed. The price recorded by the Trading Server at execution shall be the Transaction price.

2.5 Spreads may be fixed or variable and may widen because of volatility, low liquidity, news, market openings or closures, Price Gaps or abnormal market conditions.

2.6 Slippage may occur when the requested price is unavailable. An Order may be executed at a higher or lower price than requested, and Slippage may operate either in favour of or against the Client.

2.7 Stop Loss, Take Profit, Pending Orders and market Orders may be affected by Slippage and are not guaranteed to execute at their specified price.

2.8 When an Underlying Market is closed or unavailable, the Company may provide a Quote based on available market information, related instruments, liquidity conditions and other factors it considers relevant.

2.9 If a Quote is clearly incorrect because of a pricing, feed, system or calculation error, the Company may remove the Quote and cancel or adjust any affected Transaction using an appropriate market or reference price.

2.10 The Company may temporarily stop providing Quotes or suspend trading where reliable pricing or sufficient liquidity is unavailable.`,
      },
      {
        heading: 'Section E · 3. Positions, Lots and Contract Specifications',
        content: `3.1 The size of a CFD Transaction may be expressed in Lots, units, contracts or another measurement specified by the Company.

3.2 The applicable Contract Specifications may include:

a) Minimum and maximum Transaction Size;

b) Lot Size and permitted volume increments;

c) Trading hours and applicable currency;

d) Margin and leverage requirements;

e) Spreads, commissions, swaps and financing Charges;

f) Minimum distance for Pending Orders, Stop Loss and Take Profit;

g) Expiry, rollover or settlement terms; and h) Any position or exposure limits.

3.3 The Client is responsible for reviewing and understanding the applicable Contract Specifications before placing an Order.

3.4 The Company may amend the Contract Specifications where reasonably necessary because of market conditions, liquidity, third-party requirements, Corporate Actions or risk-management considerations.

Changes may apply to new or existing Positions.

3.5 The Company may impose a maximum number, size or total value of Open Positions for a Client, Financial Instrument or group of connected accounts.

3.6 Where a Position exceeds an applicable limit, the Company may reject further Orders, partially execute an Order or reduce or close the excess Position.

3.7 Transaction quantities, cash adjustments and settlement amounts may be rounded according to the Trading Platform's technical requirements or the applicable Contract Specifications.`,
      },
      {
        heading: 'Section E · 4. Financing Charges',
        content: `4.1 The Company may apply financing, funding or rollover Charges to Positions that remain open beyond the applicable daily cut-off time.

4.2 Financing Charges may be calculated using the notional value, Transaction Size, Financial Instrument, direction of the Position, applicable interest or benchmark rate, Company markup and number of days the Position remains open.

4.3 The applicable rates and calculation method will be displayed in the Contract Specifications, Personal Area or Trading Platform and may differ between Financial Instruments and account types.

4.4 Financing Charges may accrue during weekends, holidays and periods when an Underlying Market is closed. A multiple-day Charge may be applied on a specified day to cover non-trading days.

4.5 A financing amount may be debited from or, where expressly stated, credited to the Client Account.

The Company is not required to pay a financing credit unless provided in the applicable Contract Specifications.

4.6 The Company may change financing rates because of benchmark-rate changes, market conditions, liquidity-provider charges or other funding costs. Such changes may take effect immediately where the relevant underlying cost changes without prior notice.

4.7 The Client is responsible for ensuring that sufficient funds remain available to pay all Financing Charges.`,
      },
      {
        heading: 'Section E · 5. Swaps and Overnight Adjustments',
        content: `5.1 A Swap or overnight adjustment may be debited from or credited to a Position that remains open after the applicable rollover time.

5.2 The amount may depend on the Financial Instrument, Transaction Size, direction of the Position, applicable rate and number of days for which the Position remains open.

5.3 Multiple-day swaps may be applied on a specified day to account for weekends, holidays or settlement arrangements.

5.4 Both sides of a Hedged Position may be subject to separate Swap Charges.

5.5 Swap rates may change at any time because of market conditions, interest rates, liquidity-provider charges or other funding costs. A positive Swap may become negative and vice versa.

5.6 No Client is entitled to swap-free trading unless the Company expressly approves it in writing and publishes the applicable terms.`,
      },
      {
        heading: 'Section E · 6. Corporate Actions and Adjustments',
        content: `6.1 A Corporate Action may include a dividend, distribution, rights issue, stock split, reverse split, consolidation, merger, takeover, spin-off, reorganization, delisting, symbol change or another event affecting an Underlying Asset.

6.2 If a Corporate Action occurs, the Company may:

a) Adjust the price, size, quantity or opening value of a Position;

b) Make a cash credit or debit to the Client Account;

c) Adjust or cancel a Pending Order, Stop Loss or Take Profit;

d) Replace the Underlying Asset with another instrument;

e) Close an affected Position; or f) Suspend or discontinue trading in the relevant CFD.

6.3 Dividend adjustments may be credited to long Positions and debited from short Positions, after deducting applicable taxes, Charges or third-party costs.

6.4 The Company will determine the effective date, calculation method and adjustment using information received from the relevant market, issuer, data provider or liquidity provider.

6.5 The Company will seek to preserve the economic effect of the Position where reasonably practicable but does not guarantee that the adjustment will place the Client in the same position as an owner of the Underlying Asset.

6.6 Adjusted quantities or amounts may be rounded according to the Trading Platform's requirements, with any remaining value reflected as a cash adjustment where appropriate.

6.7 The Company may make an adjustment without prior notice where the Corporate Action requires immediate action. Its calculation shall apply unless a clear error is established.`,
      },
      {
        heading: 'Section E · 7. Trading Suspension and Market Disruption',
        content: `7.1 A Market Disruption may occur where:

a) An Underlying Market is closed, suspended or restricted;

b) Reliable pricing or sufficient liquidity is unavailable;

c) Abnormal volatility, a Price Gap or disorderly trading occurs;

d) An exchange, issuer, liquidity provider or data provider stops or changes its services;

e) The Company cannot reasonably execute or hedge Transactions;

f) A competent authority imposes a restriction; or g) Another event prevents the Company from maintaining an orderly market.

7.2 The Company shall determine whether a Market Disruption exists or is likely to occur.

7.3 During a Market Disruption, the Company may:

a) Suspend or limit Quotes and trading;

b) Reject or cancel Orders;

c) Close or adjust Open Positions;

d) Change trading hours, Margin or leverage;

e) Apply special pricing, execution or settlement conditions; or f) Discontinue the affected Financial Instrument.

7.4 The Company will notify the Client where reasonably practicable, but it may take immediate action without prior notice where necessary.

7.5 Stop Loss, Take Profit and other instructions may not operate or may be executed at a different price during a Market Disruption.

7.6 The Client's payment, Margin and settlement obligations shall continue during a Market Disruption unless the Company confirms otherwise.

7.7 The Company shall not be liable for losses resulting from action reasonably taken under this Clause, except where caused by its fraud, wilful misconduct or gross negligence.`,
      },
      {
        heading: 'Section E · 8. Other Product Terms',
        content: `8.1 The Company may introduce, suspend or discontinue any Financial Instrument or product at any time and is not required to continue offering a particular CFD.

8.2 Trading hours will be stated in the Contract Specifications or Trading Platform and may change because of holidays, market closures, liquidity or other market conditions.

8.3 A CFD may have an expiry or rollover date. The applicable settlement, automatic closure or rollover method will be stated in the Contract Specifications.

8.4 If the Client does not close an expiring Position before the applicable deadline, the Company may close, settle or roll over the Position and cancel any related Pending Orders.

8.5 Where a product is discontinued, the Company may require the Client to close affected Positions or may close them using the last available price or another reasonable reference price.

8.6 If the price of an Underlying Asset becomes negative or cannot be reliably determined, the Company may suspend trading, change Margin, close or adjust Positions or apply another reasonable settlement method.

8.7 The Contract Specifications form part of this Agreement. Where a product-specific term conflicts with a general term, the more specific product term shall apply to that Financial Instrument.`,
      },
      {
        heading: 'Section F · 1. Conflicts of Interest',
        content: `1.1 A conflict of interest may arise between the Company, the Client, an Affiliate, another client, an Introducer, a liquidity provider or another service provider.

1.2 A conflict may arise where the Company or an Affiliate:

a) Acts as principal or counterparty to a Client's Transaction;

b) Holds a Position opposite to or different from the Client's Position;

c) Hedges or chooses not to hedge a Transaction;

d) Provides services to another client with competing interests;

e) Receives or pays commissions, rebates, markups or other benefits; or f) Has another financial interest in the outcome of a Transaction or Service.

1.3 The existence of a conflict does not by itself prevent the Company from providing the Services or constitute a breach of this Agreement.

1.4 The Company will take reasonable steps to identify and manage material conflicts through internal policies, separation of duties, disclosure or by declining to provide the affected Service.

1.5 Where a material conflict cannot be adequately managed, the Company may disclose the general nature of the conflict to the Client or refuse, restrict or discontinue the relevant Service.

1.6 Unless required by Applicable Law, the Company is not required to disclose confidential information, the identity of another client, its hedging arrangements or the amount of any profit, commission or benefit it receives.

1.7 The Company may publish and amend a Conflict of Interest Policy on its Website. The Client agrees to review that policy from time to time.`,
      },
    ],
  },
  {
    id: 'general-business-terms',
    title: 'General Business Terms',
    shortTitle: 'General Business Terms',
    category: 'Trading Standards',
    lastUpdated: 'September 2026',
    description: 'How quotes, orders, execution, account adjustments, deposits and withdrawals operate across Movement Markets platforms.',
    sections: [
      {
        heading: 'Important Notice',
        content: `These General Business Terms consist of two sections and establish the procedures governing non-trading operations on the Client’s Trading Account, trading operations, the submission and execution of Client Requests and Orders, the resolution of disputed trading situations and related communications.

These General Business Terms form an integral part of the Client Agreement and must be read together with it. Unless otherwise defined in these General Business Terms, capitalised terms shall have the meanings assigned to them in the Client Agreement.`,
      },
      {
        heading: '1.1 Provision of Quotes',
        content: `The conditions under which Quotes are provided shall depend on the type of Trading Account used by the Client.

(a) For all Trading Accounts:

In addition to the provisions contained in Section E, Clause 2 of the Client Agreement, Quotes provided by the Company may differ from the price of the relevant Underlying Asset. If the Underlying Market is closed, the Quotes provided by the Company may reflect the estimated price of the Underlying Asset;

The Company shall establish the Spread applicable to each Financial Instrument in the Contract Specifications. Spreads displayed on the Company’s Website are standard or average Spreads and may increase or decrease depending on market conditions and volatility. The Company shall be entitled to change the Spread without providing prior written notice to the Client.

(b) If the Quote stream is interrupted unexpectedly because of a hardware, software, communication or other technical failure, the Company shall be entitled to synchronize or reconstruct the Quote history on the Trading Server by using information obtained from alternative sources.

(c) Alternative sources may include:

another live or demonstration trading server operated or used by the Company; or any other quotation or pricing source that the Company considers reliable.

(d) If a dispute arises in connection with an interruption of the Quote stream, the Company shall review and determine the matter using the synchronized Quote history recorded on the Trading Server.`,
      },
      {
        heading: '1.2 Trading and Account Adjustments',
        content: `(a) The Company shall determine, at its sole discretion, any adjustment or amendment to the size, value or number of a Transaction and to the level, size or terms of an Order. Except in the case of a manifest error, the Company’s determination shall be final and binding on the Client.

(b) Information concerning applicable adjustments shall be published on the Company’s Website, Trading Platform or in the relevant Contract Specifications.

(c) Where applicable, including where a Financial Instrument is based on shares or an equity index in respect of which a dividend is paid, the Company may apply a dividend adjustment to Positions remaining open on the relevant ex-dividend date. A dividend adjustment shall generally be credited to the Client’s Trading Account for a long Position and debited from the Client’s Trading Account for a short Position, subject to any applicable taxes, Charges and adjustments.

(d) The Company reserves the right, at its sole discretion, to apply an Adjustment Event separately for each trading session. The Company shall notify the Client of any action it decides to take as soon as reasonably practicable. Such notice may be provided after the relevant Adjustment Event has occurred.`,
      },
      {
        heading: '1.3 Client Identification',
        content: `(a) The Company shall verify the identity of the Client to prevent unauthorized access to the Client Account and to confirm that account activities and instructions are performed or submitted by the Client or an authorized representative.

(b) When registering a Client Account, the Client must provide complete, accurate, current and truthful information as required by the Company for identification and verification purposes (“Identification Data”).

The Client must promptly notify the Company of any change to the Identification Data.

(c) Identification Data may include the Client’s full name, date of birth, nationality, identification or passport details, residential address, email address, telephone number, tax information and any other information requested by the Company.

(d) The Company may verify the Client’s identity and address through identification documents, proof-of-address documents, electronic databases or other reliable sources. The Client’s email address or telephone number may be verified by sending a verification code or by another security procedure determined by the Company.

(e) Non-trading operations for which the Company may require verification include:

submitting a withdrawal request;

changing Access Data or a security method;

changing personal, contact or payment information; and any other operation that the Company considers sensitive or requires additional authentication.

(f) The security methods available to verify the Client may include:

email verification codes;

SMS verification codes;

passkeys;

push notifications;

a Time-Based One-Time Password (“TOTP”) generated through an authentication application; or any other verification method introduced by the Company.

The above list is not exhaustive. The Company may add, remove or modify the available security methods at its discretion.

(g) Email verification may require the Company to send a verification code to the email address registered by the Client. The Client must enter the code through the Website, Personal Area or another interface approved by the Company.

(h) SMS verification may require the Company to send a verification code to the telephone number registered by the Client. The Client must enter the code through the Website, Personal Area or another interface approved by the Company.

(i) Passkey verification may require the Client to authenticate an operation using a cryptographic credential stored on or connected to the Client’s authorized device.

(j) Push-notification verification may require the Client to approve or reject an operation through a notification delivered to the Client’s registered device.

(k) TOTP verification may require the Client to enter a time-limited code generated by an authentication application connected to the Client Account.

(l) The Client may select from the security methods made available by the Company. The Company shall have the right to determine which security methods are available to a particular Client and may change the default or required security method by notifying the Client.

(m) The Company may require the Client to complete additional identity checks before changing a registered security method. The information supplied during such checks must correspond with the Identification Data and documents previously provided by the Client.

(n) If the Client loses access to a registered security method, the Client must immediately notify the Company and successfully complete the identity-verification procedure required by the Company.

Following a security-method reset, the Company may restrict withdrawals and other sensitive operations for at least twenty-four (24) hours or for any other period reasonably required to protect the Client Account.

(o) The Company may suspend or refuse a non-trading operation if the Identification Data is incorrect, incomplete, expired or invalid, or if the Client fails to provide information or documents requested by the Company.

(p) If the Client loses access to the primary password and the registered email address or telephone number, the Company may restrict or close the Client Account after completing the necessary verification and security review. Any remaining funds may be returned through the original payment method or through another method selected by the Company, subject to the Company’s verification and compliance requirements.

(q) The Company may, at any time after registration, request further information, documents, photographs, biometric or liveness checks, a video call or another form of verification concerning the Client’s identity, residence, source of funds, source of wealth, payment methods or account activity.`,
      },
      {
        heading: '1.4 Review of Suspicious Operations',
        content: `(a) The Company shall monitor the Client’s compliance with these General Business Terms and may investigate any operation or activity that it considers suspicious. For the purpose of conducting an investigation, the Company may suspend or delay the relevant operation for such period as it considers reasonably necessary.

(b) During an investigation, the Company may require the Client to provide any information, explanation or supporting documents that the Company considers necessary. The Client must provide the requested information and documents within the period specified by the Company.

(c) Indicators of suspicious operations may include, without limitation:

carrying out a large number of deposits, withdrawals or transfers where there is no trading activity or only minimal trading activity on the Trading Account;

conducting operations that have no apparent economic, commercial or legitimate purpose;

failing or refusing to comply with a due-diligence request, including a request for identification information, proof of identity, proof of address, source of funds or source of wealth;

providing false, incomplete, inconsistent or misleading personal or financial information;

repeatedly attempting to conduct non-trading operations for the benefit of a third party;

making or receiving payments through a payment method that is not held in the Client’s name;

providing forged, altered or inconsistent documents; or impersonating another person or allowing another person to operate the Client Account.

(d) The indicators listed above are not exhaustive. The Company may classify an operation as suspicious after considering the Client’s account activity, transaction history, trading behaviour, payment activity, information provided by the Client and any other relevant circumstances.

(e) If the Company determines that an operation is suspicious, fraudulent or contrary to these General Business Terms or the Client Agreement, the Company may:

reject, cancel, reverse or delay the relevant operation;

apply any applicable fee or commission to a deposit, withdrawal or transfer;

restrict, suspend or block any Client Account or Trading Account connected with the operation;

cancel or adjust any related Transaction; and return the Client’s funds through the original payment method or through another method selected by the Company, subject to the Company’s compliance requirements.

(f) Notwithstanding any other provision of the Client Agreement or these General Business Terms, the Company may temporarily block or freeze the Client’s operations where an investigation is being conducted by the Company, a payment service provider, a competent authority or a regulatory body, or where the Client fails to provide information or documents requested by the Company.`,
      },
      {
        heading: '2.1 General Trading Conditions',
        content: `(a) The Trading Platform allows the Client to open and operate the types of Trading Accounts made available by the Company and described on the Website from time to time.

(b) Buy Orders and long Positions are opened at the Ask price. Sell Orders and short Positions are opened at the Bid price.

(c) Open Positions remaining on a Trading Account at the end of a trading day shall be carried forward to the following trading day. The applicable rollover time shall be determined according to the Trading Server time and may be specified on the Website or in the Contract Specifications.

(d) The Spread is not fixed unless expressly stated otherwise in the Contract Specifications. Its size shall be determined according to the prevailing market conditions. Standard or average Spreads may be displayed in the Contract Specifications or on the Company’s Website.

(e) The Company may use Market Execution, Instant Execution or another execution method when processing Transactions. The execution method applicable to each Financial Instrument or Trading Account shall be stated in the Contract Specifications, Trading Platform or Personal Area.

(f) The Trading Platform shall be the principal method through which the Client submits Requests, Orders and trading instructions to the Company.

(g) Where the relevant functionality is available, the Company may allow the Client to select or change the execution method through the Personal Area. The Company may withdraw or restrict this option if the Client engages in a Prohibited Trading Practice, suspicious operation or any activity that the Company reasonably considers abusive or disruptive.

In such circumstances, the Company may change the execution method applicable to the Client’s existing or future Trading Accounts to Market Execution, Instant Execution or another available execution method.

All Transactions submitted after the change shall be processed using the execution method assigned to the relevant Trading Account.`,
      },
      {
        heading: '2.2 Client Requests and Orders',
        content: `(a) The Company may refuse a Client Request, Order or instruction relating to a Trading Account where:

the Client’s instruction is not submitted while the relevant Quote remains valid;

the Client’s instruction is not received by the Company because of an interruption or failure of the Client’s internet connection or communication system;

the relevant Quote contains a manifest or obvious error;

the relevant Quote does not represent a valid market price;

the requested Transaction size is below the minimum or above the maximum size stated in the Contract Specifications;

a Force Majeure Event described in Section A, Clause 11 of the Client Agreement has occurred;

the Client’s Free Margin is lower than the Initial Margin required to open the requested Position;

the Company is unable to confirm a price for the relevant Financial Instrument, including where the Trading Platform displays an “Invalid Price”, “Off Quotes” or similar message;

the Company or a service provider is carrying out maintenance or experiencing a technical failure;

the Client is insolvent, bankrupt or otherwise in default;

the Client is attempting to abuse the market or the Company’s trading systems; or the Client has carried out or attempted to carry out market abuse, market manipulation, fraudulent activity, insider dealing, a Prohibited Trading Practice or another activity described in Section C, Clause 3 of the Client Agreement.

(b) If a liquidity provider, trading venue or other execution provider cancels a Transaction or changes its execution price, the Company may make the corresponding cancellation, correction or adjustment to the Client’s Trading Account.

(c) For the purposes of this section, the Company may treat the Client as insolvent or in default where the Client:

fails to perform an obligation under the Client Agreement or these General Business Terms;

fails to comply with the applicable Margin requirements; or becomes bankrupt, insolvent or subject to a similar proceeding.

(d) Where the Client is insolvent or in default, the Company may:

close any or all Open Positions at the available market price;

deduct from the Client’s Trading Account any amount owed by the Client to the Company; and restrict, suspend or close any Client Account or Trading Account.

(e) Where a Client Request, Order or instruction is refused, the Trading Platform may display a corresponding rejection, error or status message.

(f) In exceptional circumstances, the Company may decide to accept or execute a Client Request, Order or instruction even where the Company would otherwise be entitled to refuse it. Such acceptance shall not require the Company to accept a similar Request, Order or instruction in the future.

(g) Where an Expert Advisor, trading robot, API or other automated system submits an excessive number of repetitive, erroneous or economically unreasonable Requests or Orders, including repeated attempts to trade without sufficient Free Margin, the Company may restrict or disable the automated system or the relevant Trading Account until the issue has been corrected.`,
      },
      {
        heading: '2.3 Opening Positions',
        content: `(a) To submit an instruction to open a Position, the Client must specify the Financial Instrument, Transaction volume and direction of the Transaction.

(b) Where applicable, the opening Transaction value may be calculated using the following formula:

Opening Transaction Value = Volume in Lots × Contract Size × Applicable Currency Conversion Rate The applicable Contract Size, Margin Currency and conversion method shall be specified in the Contract Specifications.

(c) For a foreign-exchange Financial Instrument, the Margin Currency will generally be the first currency in the currency pair unless otherwise stated in the Contract Specifications.

(d) For Financial Instruments traded through Instant Execution:

the Client must select “Buy” or “Sell” through the Trading Platform when the displayed Quote is acceptable to the Client;

if the Quote changes while the Client’s instruction is being processed, the Company may offer a new price or reject the instruction;

where a new price is offered, a requote or similar message may appear on the Trading Platform;

if the Client wishes to proceed at the new price, the Client must accept it within the period displayed on the Trading Platform; and upon acceptance, the instruction shall be submitted to the Trading Server again and shall undergo the applicable validation and execution checks.

(e) For Financial Instruments traded through Market Execution:

the Client must select “Buy by Market”, “Sell by Market” or the corresponding command available through the Trading Platform;

the Client’s instruction may be executed at a price different from the Quote displayed in the most recent Market Snapshot where:

(i) the current Quote has changed since the most recent Market Snapshot;

(ii) the volume available at the displayed Quote is lower than the Transaction volume requested by the Client; or (iii) the Transaction is executed at a different price by a liquidity provider or execution venue;

the Client’s instruction shall be executed at the best price available to the Company at the time of execution;

after receiving the instruction, the Trading Server shall determine whether the Client has sufficient Free Margin to open the Position under the Margin requirements applicable to the relevant Financial Instrument;

the Trading Server shall calculate the Margin, Floating Profit or Loss, Equity and Free Margin of the Client’s Trading Account after provisionally including the new Position;

the Position may be opened where the resulting Free Margin is equal to or greater than zero and the Client’s total exposure does not exceed the applicable Trading Account or Financial Instrument limits;

the Company may reject the instruction where the resulting Free Margin is below zero, the applicable Margin requirements are not satisfied, or opening the Position would immediately result in a Margin Call, Stop-Out or negative Equity; and the Company may restrict or prohibit the opening of new Positions in a Financial Instrument where it considers such action necessary.

(f) An instruction to open a Position shall be considered executed, and the Position shall be considered open, when the corresponding record appears on the Trading Server.`,
      },
      {
        heading: '2.4 Closing Positions',
        content: `(a) To submit an instruction to close a Position, the Client must specify the relevant Financial Instrument or Position and the Transaction volume to be closed. The Client may close the Position fully or partially where partial closure is supported by the Trading Platform.

(b) For Financial Instruments traded through Instant Execution:

the Client must select “Close” or the corresponding command available through the Trading Platform when the displayed Quote is acceptable to the Client;

if the Quote changes while the closing instruction is being processed, the Company may offer a new price or reject the instruction; and where a new price is offered, the Client must accept it within the period displayed on the Trading Platform for the instruction to be submitted again.

(c) For Financial Instruments traded through Market Execution:

the Client must select “Close” or the corresponding command available through the Trading Platform;

the closing instruction may be executed at a price different from the Quote displayed in the most recent Market Snapshot where:

(i) the current Quote has changed since the most recent Market Snapshot;

(ii) the volume available at the displayed Quote is lower than the volume the Client wishes to close; or (iii) the Transaction is executed at a different price by a liquidity provider or execution venue.

(d) A Client’s instruction to close a Position shall be executed at the best price available to the Company at the time of execution.

(e) A Position shall be considered closed when the corresponding record appears on the Trading Server.

Where only part of the Position is closed, the remaining volume shall continue as an Open Position.`,
      },
      {
        heading: '2.5 Stop-Out Procedure',
        content: `(a) The Company may automatically close one or more of the Client’s Open Positions if the applicable Stop- Out level is reached or the Trading Account has negative Equity. Hedged Positions may also be subject to Margin requirements and automatic Stop-Out where the Trading Account has negative Equity.

(b) Where the Client has several Open Positions, the Position with the highest Floating Loss shall be placed first in the queue for automatic closure.

(c) If the execution of Stop-Out results in negative Equity, the Trading Account shall be handled in accordance with the Negative Balance Protection provisions of the Client Agreement.

(d) The Company may change the applicable Stop-Out percentage from time to time. Any such change shall be made available on the Company’s Website and shall take effect on the date specified by the Company.

Where an Event of Default occurs, the Company may increase the Stop-Out level, change the required Margin Level or close any or all of the Client’s Open Positions.

(e) The Client may suffer losses as a result of a Margin Call or Stop-Out, and the Trading Account may enter a negative Balance. The Company shall not be liable for any Margin Call or resulting loss, including any loss arising from the execution of Stop-Out.

The Client is fully responsible for continuously monitoring the Trading Account, including whether and when any Open Position reaches the Margin Call or Stop-Out level, and for maintaining sufficient Equity at all times to support all Open Positions.`,
      },
      {
        heading: '2.6 Order Types',
        content: `(a) The following Order types may be available through the Trading Platform.

To open a Position:

Buy Limit — an Order to open a long Position at a price lower than the price available when the Order is placed;

Buy Stop — an Order to open a long Position at a price higher than the price available when the Order is placed;

Buy Stop Limit — a Stop Order which, when the future Ask price reaches the specified stop level, places a Buy Limit Order at the price entered in the Stop Limit field. The stop level is placed above the current Ask price, while the Stop Limit price is placed below the stop level;

Sell Limit — an Order to open a short Position at a price higher than the price available when the Order is placed;

Sell Stop — an Order to open a short Position at a price lower than the price available when the Order is placed; and Sell Stop Limit — a Stop Order which, when the future Bid price reaches the specified stop level, places a Sell Limit Order at the price entered in the Stop Limit field. The stop level is placed below the current Bid price, while the Stop Limit price is placed above the stop level.

To close a Position:

Stop Loss — an Order intended to close an existing Position at a price less favourable to the Client than the price available when the Order is placed; and Take Profit — an Order intended to close an existing Position at a price more favourable to the Client than the price available when the Order is placed.

(b) Placement and duration of Orders:

the Client may place, modify or delete an Order only during the trading hours of the relevant Financial Instrument. Trading hours are stated in the Contract Specifications;

Pending Orders for Financial Instruments traded twenty-four (24) hours per day shall have “Good Till Cancelled” or “GTC” status. The Client may specify an expiry date and time in the relevant field;

Pending Orders for Financial Instruments that are not traded twenty-four (24) hours per day shall have “Day Order” status and may be deleted at the end of the trading session;

Stop Loss and Take Profit Orders shall have “Good Till Cancelled” or “GTC” status;

when submitting a Pending Order, the Client must specify the Financial Instrument, Transaction size, Order type and Order level. The Client may also specify a Stop Loss level, Take Profit level and expiry date and time;

the instruction shall be rejected if a required parameter is missing or incorrect, or if an optional parameter is entered incorrectly; and when placing a Stop Loss or Take Profit Order for an Open Position, the Client must specify the relevant Position or Financial Instrument and the required Stop Loss or Take Profit level.

(c) When placing a Stop Loss, Take Profit or Pending Order, the distance between the Order level and the current market price must not be less than the applicable “Limit and Stop Levels” stated in the Contract Specifications. The following conditions shall apply:

for a Stop Loss on a short Position, the current market price is the Ask price and the Order must not be placed below the Ask price plus the applicable Limit and Stop Level;

for a Take Profit on a short Position, the current market price is the Ask price and the Order must not be placed above the Ask price minus the applicable Limit and Stop Level;

for a Stop Loss on a long Position, the current market price is the Bid price and the Order must not be placed above the Bid price minus the applicable Limit and Stop Level;

for a Take Profit on a long Position, the current market price is the Bid price and the Order must not be placed below the Bid price plus the applicable Limit and Stop Level;

a Buy Limit must not be placed above the Ask price minus the applicable Limit and Stop Level;

a Buy Stop must not be placed below the Ask price plus the applicable Limit and Stop Level;

a Sell Limit must not be placed below the Bid price plus the applicable Limit and Stop Level; and a Sell Stop must not be placed above the Bid price minus the applicable Limit and Stop Level.

(d) An Order shall be considered placed when the corresponding record appears on the Trading Server.

(e) An instruction to place an Order may be rejected if it is submitted before the first Quote is received following the opening of the relevant market.

(f) When modifying a Pending Order, the Client must specify the relevant Financial Instrument or Order, the Pending Order level and any Stop Loss or Take Profit levels. If the required information is incorrect, the instruction may be rejected and the relevant modification function may remain inactive.

Where the Client places or modifies a Pending Order during:

insufficient market volume or liquidity;

abnormal market volatility;

a Price Gap;

an upcoming economic or market-news event;

the use of abusive or Prohibited Trading Practices; or insufficient Free Margin, the Company may reject the instruction, refuse to open, modify or execute the Pending Order, execute it at a price different from the requested price, or reject the Client’s Request.

(g) When modifying a Stop Loss or Take Profit Order attached to an Open Position, the Client must specify the relevant Position or Financial Instrument and the new Stop Loss or Take Profit level. If the required information is incorrect, the instruction may be rejected and the relevant modification function may remain inactive.

(h) To delete a Pending Order, the Client must identify the relevant Order. An instruction to modify or delete an Order shall be considered executed when the corresponding record appears on the Trading Server.

(i) The Company may refuse an Order modification where the proposed Stop Loss or Take Profit level would cause the Order to become immediately eligible for execution at the current market price.

(j) The Company may refuse to open or modify a Pending Order where the Stop Loss level is closer to the opening price than the applicable average Spread.

(k) The Company may use the market price when executing Take Profit, Stop Loss, Buy Limit, Sell Limit, Buy Stop and Sell Stop Orders. Take Profit, Buy Limit and Sell Limit Orders may be executed with slippage favourable to the Client. Stop Loss, Buy Stop and Sell Stop Orders may be executed with slippage unfavourable to the Client.

(l) If Stop Orders are placed very close to current market prices or are repeatedly modified to remain at such levels, particularly during volatile or abnormal market conditions, the Company may be unable to provide its standard trading conditions.`,
      },
      {
        heading: '2.7 Execution of Orders',
        content: `(a) An Order shall be placed in the execution queue in the following circumstances:

a Take Profit Order attached to a long Position, when the Bid price in the Quote stream becomes equal to or higher than the Order level;

a Stop Loss Order attached to a long Position, when the Bid price in the Quote stream becomes equal to or lower than the Order level;

a Take Profit Order attached to a short Position, when the Ask price in the Quote stream becomes equal to or lower than the Order level;

a Stop Loss Order attached to a short Position, when the Ask price in the Quote stream becomes equal to or higher than the Order level;

a Buy Limit Order, when the Ask price in the Quote stream becomes equal to or lower than the Order level;

a Sell Limit Order, when the Bid price in the Quote stream becomes equal to or higher than the Order level;

a Buy Stop Order, when the Ask price in the Quote stream becomes equal to or higher than the Order level; and a Sell Stop Order, when the Bid price in the Quote stream becomes equal to or lower than the Order level.

The Company shall endeavour to execute a Limit Order at the limit price requested by the Client. However, the Company may be unable to execute a Limit Order where:

there is insufficient volume in the Underlying Market;

the Order exceeds the Company’s risk-management limits; or the relevant Bid or Ask price has not reached the required Order level.

For a Sell Limit Order, the Bid price must reach the requested limit price. For a Buy Limit Order, the Ask price must reach the requested limit price.

(b) Activation of an Order on the Trading Server may take up to five (5) seconds.

Subject to the exceptions stated below, where an Order price falls within a Price Gap at market opening or during abnormal market conditions, the Order shall be executed at the market price available when activation of the Order is completed.

For Financial Instruments identified on the Company’s Website, where:

an Order is executed during market conditions that differ from normal conditions, including low-liquidity conditions; or the price specified in a Pending Order falls within a Price Gap and the absolute difference between the Order price and the market price available after the Price Gap equals or exceeds the applicable gap level for that Financial Instrument, the Order shall be executed at the market price available following the Price Gap. In all other cases, the execution price shall correspond to the price specified in the Order.

Buy Stop, Sell Stop and Stop Loss Orders may be executed at a price less favourable than the price specified by the Client. Buy Limit, Sell Limit and Take Profit Orders may be executed at a price more favourable than the price specified by the Client.

The Company may, at its discretion, execute an Order at the requested price despite a Price Gap or remove an applicable Limit and Stop Level for a particular Financial Instrument.

The Company may cancel, modify or withdraw the above conditions where the Client is involved in suspicious operations or where the Company otherwise considers such action necessary. In such circumstances, the Order may be executed at the available market price, and the Company shall not be liable for any resulting consequences or losses.

(c) The Company shall endeavour to execute the Client’s Orders, including Market Orders, on the best terms reasonably available. The Client acknowledges that the Company shall determine the relevant execution parameters after considering the applicable circumstances.

The Company shall endeavour to execute Orders within a reasonable period. The time reasonably required for execution may vary depending on the size and volume of the Client’s Order, conditions in the Underlying Market, including high volatility or low liquidity, the overall size and volume of the Company’s Order Book and other relevant factors.

The Client acknowledges that these circumstances may arise unexpectedly and that the Company shall not be liable for delays or losses resulting from such conditions.`,
      },
      {
        heading: '2.8 Handling Disputed Trading Situations',
        content: `(a) The Client may submit a complaint where a disputed trading situation arises. The Client should follow the Complaints Procedure for Clients made available on the Company’s Website, as updated from time to time.

(b) The Trading Server Data, Database and Server Log Files shall be the principal sources of information when a complaint is reviewed. Where the Trading Server Data, Database or Server Log Files do not contain the information referred to by the Client, the Company may decline to consider an argument based on that information.

(c) References to Quotes or prices provided by other companies shall not be treated as valid evidence and shall not be considered when resolving a disputed trading situation.

(d) Complaints shall not be accepted in relation to:

Client Requests or instructions that were not executed during technical work or maintenance on the Trading Server;

Transactions entered into using temporary excess Free Margin created by profit from a Position that was subsequently cancelled by the Company and made subject to annulment; or a difference between the price of a Contract for Difference displayed on the Trading Platform and the price of its Underlying Asset.

(e) The Company shall resolve disputed trading situations by correcting the cause of the complaint, which may include reopening a Position that was closed incorrectly.

(f) The Company shall not compensate the Client for losses arising from matters that are unrelated to the disputed trading situation described in the complaint.`,
      },
      {
        heading: '2.9 Procedure for Resolving Trading Disputes',
        content: `(a) Placement and modification of Pending Orders:

A Pending Order may be considered incorrectly placed or modified where:

the relevant Transaction was submitted before market opening;

an incorrect Quote was used;

the Trading Platform failed;

the Transaction was submitted immediately before an economic or market-news event;

the Client used an abusive or Prohibited Trading Practice described in Section C, Clause 3 of the Client Agreement; or the Trading Account had insufficient Free Margin.

In such cases, the Company may delete the Pending Order or any Position opened following execution of the Pending Order, or modify the relevant execution price at its discretion.

A complaint shall not be accepted where the Client was unable to place a Pending Order or modify its level, or where the Company did not execute an instruction to place or modify an Order because of a poor connection involving the Client or the Trading Server.

While a dispute remains under review, the Company may trigger a Pending Order according to the chronological sequence in which it would have been triggered if the Client’s instruction had been executed when received by the Trading Server.

The Company may restrict the Client from placing Orders while the investigation or resolution of a dispute is in progress.

The Company shall inform the Client after making its decision concerning the dispute.

(b) Opening and closing Positions:

Where the Client was unable to open or close a Position, or the Company was unable to execute the Client’s instruction to open or close a Position, the Client’s complaint shall not be considered where:

there was a poor connection involving the Client or the Trading Server;

the relevant Quote was incorrect;

the Transaction was submitted before market opening; or the Trading Platform or Trading Server software failed.

A complaint concerning the inability to open a Position shall not be accepted where the Trading Account had insufficient funds to execute the Transaction or where the applicable limit on the overall number of Transactions, Orders or Open Positions for that Trading Account had been exceeded.

The Company may delete a Position where the instruction to open it was received before market opening, where the Position was executed using the previous trading day’s price or where the Position resulted from an incorrect Quote.

Where a Position is deleted incorrectly, the Company may decide either to restore the Position or pay compensation to the Client.

A complaint concerning the inability to execute a Transaction while a dispute is being investigated or resolved shall not be accepted.`,
      },
      {
        heading: '2.10 Interpretation of Trading Terms',
        content: `Terms used in these General Business Terms shall have the meanings given to them in the Client Agreement. Where a term is not defined in the Client Agreement, it shall have the meaning set out below.

“Account History” means the record of completed Transactions and deposit and withdrawal operations on a Trading Account.

“Account Type” means the trading conditions applicable to a particular type of Trading Account. The Account Types offered by the Company are described on the Company’s Website. The Account Type is selected when the Trading Account is opened and cannot subsequently be changed.

“Auto-Referral Activity” means activity through which an Introducing Broker receives commission from Transactions carried out on Trading Accounts directly or indirectly controlled by that Introducing Broker.

“Bar” or “Candle” means an element of a Chart showing the opening price, closing price, highest price and lowest price for a specified period, such as one minute, five minutes, one day or one week.

“Underlying Market” means the market on which the Underlying Asset of a Contract for Difference is traded.

“Buy Limit” has the meaning given to it in Section 2.6 of these General Business Terms.

“Buy Stop” has the meaning given to it in Section 2.6 of these General Business Terms.

“Chart” means a graphical representation of the Quote stream. For the period represented by a Bar or Candle:

the high is the highest Bid price;

the low is the lowest Bid price;

the closing price is the last Bid price; and the opening price is the first Bid price.

“Client Terminal Log File” means the file created by the Client’s Trading Platform to record the Client’s Requests and instructions, including the time at which they were submitted.

“Company Account” means a bank account, digital account or payment-processing account held or used by the Company.

“Disputed Situation” means:

a situation in which the Client considers that an act or omission of the Company has breached the Client Agreement or these General Business Terms;

a situation in which the Company considers that an act or omission of the Client has breached the Client Agreement or these General Business Terms; or a situation in which a Transaction was carried out using a Non-Market Quote, the first Quote at market opening, or a Quote resulting from a manifest error or failure of the Trading Platform.

“Day Order” means a Pending Order that is automatically deleted at the end of the relevant trading session.

“Suspicious Operation” means an operation or activity considered suspicious, fraudulent, uncertain or unreliable.

“Electronic Payment System” means a combination of procedures, computer networks and software used to process financial Transactions and settlements through bank cards, electronic money or other payment methods.

“Fast Market” means a market experiencing rapid price movements over a short period, often causing Price Gaps. A Fast Market may occur before or after:

the release of important macroeconomic indicators;

an interest-rate decision by a central bank;

a speech, press conference or announcement by a central-bank official, head of state, government official or finance minister;

a market intervention;

a terrorist attack;

a natural disaster or other emergency;

war or military action;

the dismissal, appointment or election of government officials; or another event affecting market prices.

This list is not exhaustive.

“Flat Market” means a market condition in which Quotes are received by the Trading Platform less frequently and over a longer period than under Normal Market Conditions. This condition may occur during Christmas, national holidays or other periods of reduced market activity.

“Full Completed Transaction” means a Transaction consisting of two opposite trades of the same volume: an opening trade and a corresponding closing trade.

“Good Till Cancelled” or “GTC” means an Order that remains active until the Client submits an instruction to cancel it.

“Instant Execution” means an execution method under which the Client receives a real-time Quote stream and may submit a Transaction at a displayed price, subject to confirmation or requoting by the Company.

“Instruction to Transfer Funds to Another Trading Account” means an instruction submitted through the Personal Area requesting the transfer of funds from one Trading Account to another Trading Account.

“Limit and Stop Levels” means the minimum permitted distance, expressed in pips or points, between an Order level and the current market price.

“Liquidity Provider” means a financial institution or other entity that provides market liquidity or acts as a counterparty in connection with the execution of Financial Instruments.

“Locked Positions” means long and short Positions of the same volume in the same Financial Instrument held on the same Trading Account.

“Market Conditions Different from Normal” means a Thin Market or Fast Market.

“Market Execution” means an execution method under which an Order is executed at the available market price and the execution price is not guaranteed.

“Market Opening” means the resumption of trading after a weekend, holiday or break between trading sessions.

“Maximum Deviation” means a parameter selected by the Client through the Trading Platform indicating the maximum permitted difference, expressed in pips, between the requested price and the execution price.

“Market Price” means the price available at the relevant time.

“Modification” means a Client Request to change an Order level. An Order is considered modified when the corresponding record appears on the Trading Server.

“Non-Market Quote” or “Spike” means a Quote satisfying one or more of the following conditions:

the Quote involves a substantial Price Gap;

the price returns to its previous level within a short period and creates a Price Gap;

the price was not volatile before the Quote appeared;

the Quote differs by more than ten percent (10%) from Quotes provided by other major market participants;

the Quote appeared outside the trading hours of the Underlying Asset; or no macroeconomic event or corporate news capable of materially affecting the Financial Instrument existed when the Quote appeared.

The Company may remove a Non-Market Quote from the Trading Server’s Quote history.

“Non-Trading Operations” include depositing or withdrawing funds, changing passwords, changing leverage and submitting a complaint.

“Normal Market Conditions” or “Normal Market” means a market in which:

there are no significant interruptions in the Quote stream;

there are no unusually rapid price movements; and there is no Price Gap.

“Order Ticket” means the unique identification number assigned by the Trading Platform to an Open Position or Pending Order.

“Partner Link” means a unique link used by an Introducing Broker or Partner to introduce new Clients to the Company. Following registration, the introduced person becomes a Client and the Introducing Broker or Partner may receive commission under the applicable partnership agreement.

“Pending Order” means an instruction from the Client to open a Position when the Market Price reaches the specified Order level.

“Point” means the smallest permitted upward or downward change in the price of a Financial Instrument.

“Pip” means a price movement equal to ten (10) Points upward or downward.

“Price Gap” means a market condition in which a price differs from the preceding price by more than the minimum permitted price movement.

“Quoting” means the process through which the Company provides Quotes to the Client for the purpose of entering into a Transaction.

“Quote Base” means the Quote-stream information stored on the Trading Server.

“Rate” means, for a currency pair, the value of the base currency expressed in the quote currency.

“Requested Price” means the price at which the Client requested execution.

“Sell Limit” has the meaning given to it in Section 2.6 of these General Business Terms.

“Sell Stop” has the meaning given to it in Section 2.6 of these General Business Terms.

“Server Log File” means a file containing records of events occurring on the Trading Server, including Client Requests and instructions.

“Stop Loss” means an Order intended to close a Position at a price less favourable to the Client than the price available when the Order was placed.

“Stop-Out” means the automatic compulsory closure of Open Positions by the Trading Server, beginning with the least profitable Position and continuing until the required Margin Level is restored. Stop-Out may occur when the Equity of a Trading Account reaches the applicable Stop-Out level or when a hedged Trading Account has negative Equity.

“Take Profit” means an Order intended to close a Position at a price more favourable to the Client than the price available when the Order was placed.

“Ticker” means the unique symbol or identifier assigned to a Financial Instrument.

“Trading Operations” include buying or selling Financial Instruments and placing, modifying or deleting Pending Orders.

“Trading Platform Time Zone” means the time zone used by the Trading Server when recording events in the Server Log File.

“Trailing Stop” means a Trading Platform function that automatically changes the Stop Loss level of a Position according to parameters selected by the Client.

“Trading Volume” or “Volume of Trade” means the number of Lots multiplied by the applicable Lot size.

“Limit Order” means an instruction to buy or sell a Financial Instrument when the Market Price reaches the specified Order price. The price specified in a Limit Order is more favourable to the Client than the Market Price available when the Order is placed.

“Stop Order” means an instruction to buy or sell a Financial Instrument when the Market Price reaches the specified Order price. The price specified in a Stop Order is less favourable to the Client than the Market Price available when the Order is placed.`,
      },
    ],
  },
  {
    id: 'risk-disclosure',
    title: 'Risk Disclosure',
    shortTitle: 'Risk Disclosure',
    category: 'Risk & Safety',
    lastUpdated: 'September 2026',
    description: 'The material risks of trading CFDs and other leveraged derivative products, which you should read before opening an account.',
    sections: [
      {
        heading: 'Important Notice',
        content: `Contracts for Difference (“CFDs”) and other derivative products are complex, leveraged financial instruments. They do not provide capital protection or any guaranteed return. Leverage increases exposure to movements in the price of the Underlying Asset and may significantly magnify both profits and losses. Even a relatively small market movement may result in a substantial and rapid loss of the funds held in your Client Account.

Trading CFDs and other derivative products is not suitable for everyone. Before opening a Client Account or entering into any Transaction, you should ensure that you understand how these products operate and carefully consider the risks associated with leverage, margin, volatility, liquidity, pricing and execution. You should trade only with funds you can afford to lose and only where such trading is appropriate for your financial circumstances, knowledge and experience.`,
      },
      {
        heading: 'Scope of this Risk Disclosure',
        content: `This Risk Disclosure and Warning Notice (Notice) outlines the general nature of the material risks associated with trading CFDs and other derivative products.

The Notice cannot identify every risk, explain every feature or describe how a risk may affect your personal circumstances. Before opening a Client Account or placing an Order, you must understand the product, the Charges, the operation of leverage and Margin, and the full extent of your possible financial exposure.

This Notice is provided for information and risk-disclosure purposes. It is not marketing material, investment research, personal advice, a recommendation or a solicitation where such activity would be unlawful. Movement Markets provides execution services and does not advise you on the merits of any Transaction.

This Notice should be read with the Client Agreement, Contract Specifications, trading and execution terms, Privacy Policy, Conflicts of Interest Policy, and every other policy or notice made available through the Website, Personal Area or Trading Platform. The current Contract Specifications and Client Agreement govern the particular conditions of an instrument or account, subject to Applicable Law.`,
      },
      {
        heading: 'Use of leverage',
        content: `Leverage allows you to control a Transaction whose notional value is substantially greater than the Margin committed. Profit and loss are calculated by reference to the full Transaction Size, not only the Margin. A small movement in the Underlying Asset can therefore create a large change in account Equity and can quickly exhaust the funds available in the Client Account.

Movement Markets may make leverage of up to 1:500 available. The actual level may be lower and can vary by Client Account, Financial Instrument, Transaction Size, trading volume, Client classification, concentration and market conditions. Movement Markets may apply fixed, variable, tiered or dynamic leverage and may reduce or withdraw leverage where permitted under the Client Agreement. A change in leverage may increase Margin Requirements for existing Positions.`,
      },
      {
        heading: 'Margin requirements and Stop-Out',
        content: `You must maintain sufficient Margin at all times. Margin Requirements can change because of volatility, news, market closure, liquidity, concentrated exposure or another risk consideration. Movement Markets is not obliged to issue a Margin Call, allow time for an additional deposit or close a Position for your protection. You must monitor Balance, Equity, used Margin, Free Margin, Margin Level, Orders and Open Positions continuously.

If the Margin Level reaches the applicable stop-out threshold, Movement Markets may automatically close one or more Open Positions, reject new Orders or cancel Pending Orders without prior notice. The default stop-out level disclosed by Movement Markets is 30%, unless a different level is displayed for the relevant account or instrument. Stop-Out does not guarantee execution at the threshold or prevent a loss. During a gap, fast market or disruption, the first executable price may be materially worse.`,
      },
      {
        heading: 'Credit, counterparty and insolvency risk',
        content: `A CFD is an over-the-counter contract. Depending on the instrument, account type and execution arrangement, Movement Markets may execute an Order as principal or may transmit or arrange it for execution through a third party. A Position entered with Movement Markets can normally be closed only through Movement Markets under the applicable trading terms. There is no exchange clearing house standing between the parties in your name.

You are exposed to Movement Markets’ ability to perform its obligations and to the operational and creditworthiness risks of relevant banks, payment service providers, liquidity providers, custodians and technology providers. If Movement Markets or a relevant third party defaults, becomes insolvent or cannot perform, Positions may be closed and you may not recover every amount recorded as due to you.`,
      },
      {
        heading: 'Market risk',
        content: `The prices of CFDs and their Underlying Assets can move rapidly and unpredictably. Economic data, interest rates, inflation, monetary and fiscal policy, political events, war, sanctions, trade restrictions, natural disasters, issuer events, market sentiment and technological developments can materially affect price and availability.

Past performance, historical volatility and previous market relationships do not predict future results.`,
      },
      {
        heading: 'Volatility and price-gap risk',
        content: `A market may move from one price to another without trading at intermediate prices. Gaps frequently arise during significant news, at session openings, after market closures or when the Underlying Market is disrupted. A gap can cause an Order, including a Stop Loss, to execute far from the requested level and can produce an immediate and substantial loss.`,
      },
      {
        heading: 'Foreign exchange and currency risk',
        content: `Currency values can be affected by interest rates, central-bank action, economic policy, political events, capital controls, sovereign credit conditions and market liquidity. Exotic and emerging-market currencies may trade irregularly, experience sharp devaluation or become unavailable. If an instrument, payment, profit or loss is denominated in a currency different from the Base Currency of your account, exchange-rate movements and conversion Charges can increase loss or reduce profit.`,
      },
      {
        heading: 'Liquidity risk',
        content: `Liquidity may decline or disappear. Quotes may become unavailable, Spreads may widen and the quantity available at a price may be insufficient. Movement Markets may be unable to execute an Order, may execute only part of it, or may reject, delay, aggregate or split execution. Larger Positions can be particularly difficult to close and the available price may move against you while execution is attempted.`,
      },
      {
        heading: 'Pricing, Spreads and Slippage',
        content: `Movement Markets’ Quotes may be derived from Underlying Markets, liquidity providers, data providers, internal pricing processes or a combination of sources. A Company Quote may differ from a price displayed by another provider. The applicable Bid and Ask prices determine the opening and closing values of a Transaction under the Client Agreement.

The Spread is an immediate trading cost and may widen significantly in volatile, illiquid or off-peak conditions.

Slippage is the difference between the requested or displayed price and the price at which an Order is executed. It may be positive, zero or negative. Movement Markets does not guarantee that an Order will be accepted, executed within a particular time or executed at a requested or displayed price.`,
      },
      {
        heading: 'Stop Loss, Take Profit and other instructions',
        content: `A Stop Loss, Take Profit, Pending Order or trailing stop is a risk-management instruction, not a guarantee. It is triggered using the applicable Company Quote and remains subject to available price, liquidity, latency, volatility, gaps and system conditions. An instruction may execute at a different price, fail to operate during an interruption or be rejected, cancelled or adjusted in circumstances permitted by the Client Agreement.

Closing an order window, Trading Platform or device does not necessarily cancel an instruction already transmitted. An Order is not accepted or executed until it has been received and confirmed by the relevant Trading Server. You must verify the status of every Order and promptly report a suspected error or unauthorized Transaction.`,
      },
      {
        heading: 'Abnormal market conditions and suspension of trading',
        content: `Trading may be restricted, delayed or impossible during rapid price movements, low liquidity, market closure, data failure, a Corporate Action, a regulatory event or another Market Disruption. Movement Markets may modify trading hours, increase Margin, reduce leverage, reject or cancel Orders, suspend pricing or trading, or close or adjust Positions where permitted by the Client Agreement. When trading resumes, prices may be materially different from the last available Quote.`,
      },
      {
        heading: 'Technical and Trading Platform risk',
        content: `Online trading depends on devices, software, internet connections, telecommunications, electricity, Trading Servers and third-party infrastructure. Maintenance, congestion, latency, incompatibility, data corruption or failure can delay or prevent access, display stale information, duplicate an instruction or prevent an Order from being placed, modified or cancelled. Electronic access does not reduce the underlying market and financial risks of trading.

Expert Advisors, algorithms, APIs, indicators, copy-trading tools, signals and other third-party software may malfunction, overtrade, rely on incorrect assumptions or fail during disconnection. Testing and historical performance do not guarantee live performance. You remain responsible for monitoring all tools connected to your Client Account and for Orders submitted through them.`,
      },
      {
        heading: 'Cybersecurity and impersonation risk',
        content: `Phishing, malware, credential theft, SIM swapping, unauthorized remote access, denial-of-service attacks and fraudulent impersonation may cause unauthorized activity, disclosure of information or loss. You must protect Access Data, use strong unique passwords and available security controls, maintain secure and updated devices, and contact Movement Markets immediately if compromise is suspected. Do not disclose a password, one-time code, private wallet key or account information to a person using an unofficial channel.`,
      },
      {
        heading: 'Communication risk',
        content: `Movement Markets may communicate through the Website, Personal Area, Trading Platform, email or another electronic channel permitted by the Client Agreement. A message may be delayed, filtered, overlooked or inaccessible. You must maintain accurate contact information and monitor official channels for notices concerning Margin, leverage, trading hours, Charges, corporate actions, account security and legal terms.`,
      },
      {
        heading: 'Force Majeure events',
        content: `An event beyond Movement Markets’ reasonable control may prevent, delay or materially affect performance. Such events may include natural disaster, fire, epidemic, war, terrorism, civil unrest, sanctions, government action, exchange or bank closure, power or communications failure, cyberattack, extreme volatility, liquidity failure or failure of a material service provider. Losses can arise while services are unavailable or while Movement Markets takes protective or operational action under the Client Agreement.`,
      },
      {
        heading: 'Third-party and Client Money risk',
        content: `Movement Markets may hold Client Money with banks, payment service providers, liquidity providers, custodians, Affiliates or other third parties within or outside Saint Lucia. Funds may be held in pooled or omnibus accounts. They can be affected by the laws, insolvency rules, security interests, operational restrictions and set-off rights applicable to the relevant holder or jurisdiction.

If a third-party holder fails or becomes insolvent, a shortfall, delay or dispute may arise and you may not recover the full amount attributed to you. Unless Movement Markets expressly confirms otherwise in writing, Client Money is not protected by a deposit-insurance or investor-compensation scheme. No interest is payable unless expressly agreed.`,
      },
      {
        heading: 'Foreign exchange CFDs',
        content: `Currency pairs may be affected by central-bank intervention, changes in interest-rate expectations, capital controls and sudden loss of liquidity. A currency may be revalued, devalued or become non-convertible. Trading in an instrument quoted or settled in another currency also creates conversion risk against the Base Currency of the Client Account.`,
      },
      {
        heading: 'Metals, energy and commodity CFDs',
        content: `Commodity prices can be affected by weather, natural disasters, storage and transport constraints, inventory, production decisions, geopolitical conflict, sanctions, seasonal demand and government policy. Futures-based products can also be affected by expiry, rollover, contango, backwardation and adjustments that differ from movements in a spot reference price.`,
      },
      {
        heading: 'Index CFDs',
        content: `An index is a calculated reference value and cannot itself be owned. Composition, weighting, rebalancing, dividends, market closures and the performance of a small number of constituents can materially affect an index.

Cash and futures-based versions may perform differently and can be subject to different financing, expiry and adjustment terms.`,
      },
      {
        heading: 'Share and equity-related CFDs',
        content: `Share prices can be affected by issuer performance, earnings, governance, litigation, financing conditions, suspension, delisting, takeover and insolvency. Short Positions can be exposed to sudden price increases and liquidity constraints. A share CFD does not give you shareholder, voting or ownership rights in the issuer.`,
      },
      {
        heading: 'Cryptocurrency CFDs',
        content: `Cryptocurrencies can be extremely volatile and may trade through fragmented markets. Prices may be affected by regulatory action, protocol failure, forks, cybersecurity events, exchange or custodian failure, manipulation, concentrated ownership, stablecoin disruption and loss of market confidence. Liquidity can change abruptly, Spreads can widen materially and a cryptocurrency may lose most or all of its value.`,
      },
      {
        heading: 'Charges, financing and currency conversion',
        content: `Spreads, Trading Commissions, swaps, rollover or financing, currency conversion, payment charges, corporate-action adjustments, taxes and other Charges can reduce profit or increase loss. Financing and swap rates may change and can be applied repeatedly while a Position remains open, including at increased rates before weekends or holidays. Review the applicable Contract Specifications and fee information before trading.`,
      },
      {
        heading: 'Corporate actions, expiry and adjustments',
        content: `Dividends, distributions, rights issues, splits, consolidations, mergers, takeovers, reorganizations, delisting, suspension, insolvency and index changes can affect a CFD. Movement Markets may make a cash or price adjustment, amend an Order, change contract terms, close a Position or suspend trading as permitted by the Client Agreement.

The result may differ from directly owning the Underlying Asset. Products that expire or roll to another reference contract may create additional price, Spread, financing or tax effects.`,
      },
      {
        heading: 'No rights in the Underlying Asset',
        content: `A CFD does not transfer legal or beneficial ownership of the Underlying Asset. Unless the product terms expressly state otherwise, you do not receive delivery, voting rights, shareholder rights or another ownership entitlement. Any dividend or Corporate Action adjustment is contractual and does not make you an owner of the Underlying Asset.`,
      },
      {
        heading: 'Laws, restricted jurisdictions and tax',
        content: `A change in law, regulation, taxation, sanctions, exchange rules or official interpretation can affect product availability, pricing, leverage, Margin, payments, reporting and the ability to maintain or close a Position. Movement Markets may need to restrict a service, request information, close an account or take another action to comply with Applicable Law.

The Website and services are not directed to a person where their offer, distribution or use would be unlawful.

You are responsible for determining whether you may lawfully use the services in every relevant jurisdiction. Trading may also create tax, duty, withholding, reporting or record-keeping obligations. Movement Markets does not provide tax advice and does not warrant any particular tax treatment.`,
      },
      {
        heading: 'Conflicts of interest',
        content: `A conflict may arise where Movement Markets acts as principal or counterparty, holds an exposure different from yours, hedges or chooses not to hedge, provides services to another Client, or receives or pays a commission, rebate, markup or other benefit. Movement Markets seeks to identify and manage material conflicts under its policies, but the existence of a conflict can affect the manner in which a service is provided.`,
      },
      {
        heading: 'Client responsibilities',
        content: `Before and while trading, you are responsible for the following:

Read and understand this Notice, the Client Agreement, Contract Specifications and all applicable policies and notices.

Trade only products you understand and only with money you can afford to lose.

Assess your objectives, financial resources, experience, knowledge and tolerance for risk before trading.

Monitor the Client Account, Orders, Positions, Margin, leverage, Charges and official communications at all relevant times.

Maintain sufficient Margin and do not rely on a Margin Call, Stop Loss, Stop-Out or last-minute deposit to limit loss.

Protect Access Data, use secure and updated technology, and promptly report suspected error, fraud or unauthorized activity.

Keep identity, contact, source-of-funds and other requested information complete, accurate and current.

Determine whether the services and each Transaction are lawful in your jurisdiction and comply with Applicable Law.`,
      },
    ],
  },
  {
    id: 'aml-kyc',
    title: 'Anti-Money Laundering (AML) & Anti-Terrorist Financing (ATF) Policy',
    shortTitle: 'AML & ATF Policy',
    category: 'Compliance & Regulations',
    lastUpdated: 'September 2026',
    description: 'How Movement Markets prevents its services from being used for money laundering, terrorist financing, fraud or sanctions evasion.',
    sections: [
      {
        heading: 'Movement Markets’ Commitment',
        content: `Movement Markets is committed to maintaining high standards of compliance in relation to Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and Anti-Terrorist Financing (ATF). The objective of this policy is to prevent Movement Markets’ services from being used for money laundering, terrorist financing, fraud, corruption, sanctions evasion, or any other unlawful activity.

Movement Markets applies internal controls, client verification procedures, transaction monitoring, record-keeping, and risk-based compliance measures to identify, prevent, and report suspicious activity where required under applicable laws and regulatory obligations.

Money Laundering Money laundering is the process of converting funds obtained from illegal activities into funds or assets that appear legitimate. This process usually involves three stages:

1. Placement Placement is the stage where illegally obtained funds are introduced into the financial system. To reduce this risk, Movement Markets does not accept or process cash payments under any circumstances. Deposits and withdrawals may only be made through approved payment methods and verified accounts belonging to the client.

Withdrawals are generally processed back to the same source or payment method from which the funds were originally received, or to another account held in the verified client’s own name, subject to compliance approval.

2. Layering Layering involves moving funds through different accounts, financial institutions, payment methods, or instruments to disguise their origin.

Movement Markets monitors client activity to identify unusual transaction patterns, inconsistent account activity, third-party payment attempts, rapid movement of funds without legitimate trading activity, or other behaviour that may indicate an attempt to conceal the source of funds.

3. Integration Integration is the stage where laundered funds are reintroduced into the economy as apparently legitimate funds through investments, purchases, withdrawals, or other financial activity.

Movement Markets reserves the right to refuse, suspend, delay, reverse, or investigate any transaction that appears suspicious, inconsistent with the client’s profile, or potentially connected to criminal activity, money laundering, terrorist financing, sanctions breaches, or illegal conduct.`,
      },
      {
        heading: 'Company Procedures',
        content: `Movement Markets implements its AML and ATF policy through the following procedures: 1. Know Your Customer (KYC) and client due diligence 2. Risk-based client assessment 3. Identification and verification of clients 4. Monitoring of client activity and transactions 5. Screening against sanctions, PEP, and adverse media where applicable 6. Record keeping and secure registry maintenance 7. Staff awareness and compliance training 8. Internal escalation and suspicious activity reporting`,
      },
      {
        heading: 'Know Your Customer (KYC)',
        content: `As part of Movement Markets’ AML and KYC obligations, every client may be required to complete verification before account approval, trading access, withdrawals, or other services are provided.

Movement Markets may request information and documents to confirm the identity, address, source of funds, source of wealth, business activity, ownership structure, and purpose of the account.

Movement Markets may apply enhanced due diligence to clients from high-risk jurisdictions, politically exposed persons, clients with unusual transaction behaviour, or clients whose funds originate from jurisdictions or activities considered higher risk.

Individual Clients Individual clients may be required to provide:

1. Full legal name 2. Date of birth 3. Nationality 4. Country of residence 5. Residential address 6. Contact details 7. Source of funds or source of wealth, where required Documents required may include: 1. Valid passport, national ID card, or driving licence 2. Proof of residential address, such as a utility bill, bank statement, or government-issued document, usually not older than 3 months 3. Additional documents where required by Movement Markets’ compliance team If documents are not in English or use non-Latin characters, Movement Markets may request a certified or notarised English translation.`,
      },
      {
        heading: 'Corporate Clients',
        content: `Corporate clients may be required to provide:

1. Certificate of Incorporation 2. Memorandum and Articles of Association, or equivalent constitutional documents 3. Certificate of Good Standing, where applicable 4. Board Resolution authorising account opening 5. Proof of registered oﬃce and business address 6. Ownership and control structure 7. Identification documents for directors, authorised representatives, shareholders, and ultimate beneficial owners 8. Powers of attorney or authorisation documents, where applicable 9. Source of funds, source of wealth, and nature of business information Movement Markets may request additional corporate documents depending on the jurisdiction, business structure, ownership complexity, and risk profile of the applicant.`,
      },
      {
        heading: 'Client Activity Monitoring',
        content: `Movement Markets continuously monitors client activity to detect suspicious, unusual, or inconsistent transactions.

Examples of suspicious activity may include: 1. Deposits or withdrawals inconsistent with the client’s profile 2. Use of third-party payment methods 3. Multiple accounts used to obscure activity 4. Rapid deposit and withdrawal without genuine trading activity 5. Refusal to provide requested verification documents 6. Use of forged, altered, or misleading documents 7. Activity connected to sanctioned countries, individuals, or entities 8. Transactions that appear linked to fraud, terrorist financing, or criminal activity Movement Markets may use both automated and manual monitoring systems to detect suspicious activity.`,
      },
      {
        heading: 'Suspicious Activity Reporting',
        content: `Where Movement Markets suspects that an account, transaction, deposit, withdrawal, or client activity may be connected to money laundering, terrorist financing, fraud, or other illegal activity, Movement Markets may report the matter to the relevant authorities or financial intelligence unit where required.

Movement Markets may be legally prohibited from informing the client that a suspicious activity report has been made.`,
      },
      {
        heading: 'Restricted Activity',
        content: `Movement Markets does not accept clients, deposits, withdrawals, or transactions that are known or suspected to be connected with:

1. Criminal proceeds 2. Terrorist financing 3. Sanctions evasion 4. Fraud or cybercrime 5. Corruption or bribery 6. Illegal gambling 7. Human traﬃcking 8. Tax evasion 9. Identity theft 10. Any other unlawful activity Movement Markets does not want business from any person or entity whose funds are derived from illegal sources or whose account activity is unlawful in any manner.`,
      },
      {
        heading: 'Payments and Withdrawals',
        content: `Movement Markets may require that withdrawals are returned to the original source of funds or to an account held in the verified client’s own name.

Movement Markets does not process third-party deposits or withdrawals unless specifically approved by the compliance team under exceptional circumstances and after satisfactory verification.

Movement Markets reserves the right to delay, reject, reverse, or request additional information for any payment or withdrawal where compliance concerns arise.`,
      },
      {
        heading: 'Record Keeping',
        content: `Movement Markets maintains records of client identification documents, account information, transaction history, due diligence records, and related correspondence for a minimum period required by applicable law and internal policy.

Unless a longer period is required, Movement Markets may retain AML and transaction records for at least five to seven years after the termination of the client relationship.`,
      },
      {
        heading: 'Staff Training',
        content: `Movement Markets provides relevant AML and compliance training to staff members responsible for onboarding, payments, client support, finance, operations, and compliance.

Training may include:

1. Recognising suspicious activity 2. Understanding AML and ATF obligations 3. Escalating unusual client behaviour 4. Handling KYC and verification procedures 5. Maintaining confidentiality 6. Reporting obligations and internal compliance processes`,
      },
      {
        heading: 'Right to Refuse or Terminate Services',
        content: `Movement Markets reserves the right, at its sole discretion, to refuse account opening, suspend an account, restrict trading, block deposits, delay withdrawals, terminate the client relationship, or refuse to process a transaction where Movement Markets believes there is a compliance, legal, regulatory, AML, ATF, fraud, or reputational risk.

Account misuse may result in termination of services and may be reported to relevant authorities.`,
      },
      {
        heading: 'Policy Review',
        content: `Movement Markets reserves the right to review, update, amend, or replace this AML & ATF Policy at any time, in accordance with applicable legal, regulatory, operational, or risk-management requirements.

This policy is intended to describe Movement Markets’ general AML and ATF approach and does not create contractual obligations beyond those required by applicable laws, regulations, internal policies, or Movement Markets’ client agreements.`,
      },
      {
        heading: 'Contact',
        content: `For AML, compliance, or verification-related inquiries, please contact: Compliance Department at: support@movementmarkets.com`,
      },
    ],
  },
  {
    id: 'conflicts-of-interest',
    title: 'Summary of Conflicts of Interest Policy',
    shortTitle: 'Conflicts of Interest',
    category: 'Integrity & Conduct',
    lastUpdated: 'September 2026',
    description: 'The arrangements Movement Markets maintains to identify, manage and disclose conflicts of interest.',
    sections: [
      {
        heading: 'Important Notice',
        content: `This Summary of Conflicts of Interest Policy sets out the arrangements maintained by Movement Markets to identify, manage and disclose conflicts of interest arising in the course of its business.`,
      },
      {
        heading: '1. Policy Purpose',
        content: `1.1. Movement Markets (the "Company") has established, implements and maintains a conflicts of interest policy to identify, manage and disclose conflicts that may arise in the course of conducting its business.

1.2. This Summary of Conflicts of Interest Policy (the "Policy") outlines the arrangements maintained by the Company to manage conflicts of interest in respect of the duties it owes to its clients. A complete version of the Conflicts of Interest Policy may be provided upon request.`,
      },
      {
        heading: '2. When Conflicts May Arise',
        content: `2.1. A conflict of interest may arise where the Company, an affiliate or a relevant person:

is likely to make a financial gain or avoid a financial loss at a client’s expense;

has an interest in the outcome of a service or transaction that is different from the client’s interest in that outcome;

has an incentive to favour one client or group of clients over another;

conducts the same type of business as the client; or receives or pays a commission, benefit or other inducement in connection with a service provided to a client.

2.2. The principal circumstances that may give rise to a conflict include where:

the Company effects or arranges client positions in which the Company, an affiliate or a relevant person has a direct or indirect material interest;

the Company uses affiliated entities in connection with the services provided to clients; or the Company pays or accepts benefits, commissions or other remuneration from third parties in connection with client positions.`,
      },
      {
        heading: '3. Measures for Managing Conflicts',
        content: `3.1. The Company maintains procedures and controls to prevent or manage conflicts of interest. These include, but are not limited to:

procedures to prevent or control the exchange of information between persons engaged in activities involving a risk of conflict;

information barriers, including Chinese walls, to restrict access to confidential information;

segregation of duties where simultaneous or sequential involvement may impair proper conflict management;

requirements for relevant persons to disclose actual or potential conflicts of interest;

training to help employees identify, prevent and manage conflicts;

automated controls designed to reduce the risk of human error or inappropriate intervention;

quality controls, monitoring and security reviews;

anti-bribery, anti-corruption and whistleblowing procedures;

restrictions or prohibitions on activities that may give rise to an unmanageable conflict; and disclosure to the client where a conflict cannot be fully prevented or adequately managed.`,
      },
      {
        heading: '4. Client Acknowledgement',
        content: `4.1. By entering into the Client Agreement, the client acknowledges that conflicts of interest may arise or exist and consents to the Company acting notwithstanding such conflicts, subject to the Company’s arrangements for managing them.`,
      },
    ],
  },
  {
    id: 'affiliate-agreement',
    title: 'Affiliate Agreement',
    shortTitle: 'Affiliate Agreement',
    category: 'Partnership Terms',
    lastUpdated: 'September 2026',
    description: 'The terms on which affiliates and introducing partners refer clients to Movement Markets and earn commission.',
    sections: [
      {
        heading: '1. Introduction',
        content: `1.1 This Affiliate Agreement (the “Agreement”) is entered into between Movement Markets Ltd (the “Company”) and the person or entity accepted as its affiliate (the “Affiliate”). Together, they are referred to as the “Parties”.

1.2 This Agreement sets out the terms of cooperation between the Parties, including the referral of clients to the Company and the payment of Commission to the Affiliate.`,
      },
      {
        heading: '2. Definitions',
        content: `In this Agreement:

“Account” means a trading account opened by a Client and approved by the Company.

“Affiliate” means an individual or legal entity accepted by the Company into the Affiliate Program.

“Affiliate Account” means the Affiliate’s online account used to access referral information, reports and Commission details.

“Affiliate Link” means the unique tracking link or referral code provided to the Affiliate.

“Affiliate Program” means the Company’s programme through which Affiliates may introduce Clients and earn Commission.

“Affiliate Site” means any website, application, social media page or other channel used by the Affiliate to promote the Company.

“Agreement” means this Affiliate Agreement, the applicable Commission Plan and any terms expressly incorporated into it.

“Applicable Laws” means all laws, regulations and regulatory requirements applicable to the Company, the Affiliate or their activities.

“Business Day” means any day other than Saturday, Sunday or a public holiday in Saint Lucia.

“Client” means an individual or legal entity accepted by the Company to open an Account.

“Client Agreement” means the terms and conditions governing the relationship between the Company and a Client.

“Commission” means any payment earned by the Affiliate under this Agreement and the applicable Commission Plan.

“Commission Plan” means the current Commission rates, calculation methods, qualifying conditions and payment arrangements displayed in the Affiliate Account or otherwise communicated by the Company.

“Company Website” means the Company’s official website and any other domain operated by the Company.

“Fraud Traffic” means registrations, deposits, transactions, clicks, installations, impressions or other activity generated through unlawful, deceptive, artificial or bad-faith methods. This includes bots, click farms, false accounts, stolen payment methods, chargebacks, collusion, system manipulation, misleading advertising and unauthorised incentives intended to generate Commission.

“Introduced Client” means a Client whose registration is tracked and assigned to the Affiliate through an Affiliate Link or another method approved by the Company.

“Promotional Materials” means any advertisement, logo, banner, link, text, image, video or other marketing content provided or approved by the Company.

“Prospective Client” means a person introduced to the Company who has not yet been accepted as a Client.

“Qualified Client” means a unique Introduced Client who:

a) was referred through the Affiliate Link;

b) was not previously registered as a Client;

c) completes the required KYC, deposit and trading requirements within the applicable qualifying period;

d) is located in an approved Territory;

e) is not connected with Fraud Traffic; and f) is not the Affiliate, its owner, director, employee, representative, household member, spouse, parent, child or sibling.

“Qualifying Transaction” means a closed transaction completed by an Introduced Client that meets the Commission eligibility requirements.

“Restricted Territory” means any country or region where the Company does not accept Clients or permit promotional activities, as updated by the Company from time to time.

“Territory” means any country or region in which the Company permits the Affiliate to conduct promotional activities.`,
      },
      {
        heading: '3. Affiliate Application and Appointment',
        content: `3.1 To join the Affiliate Program, the applicant must complete the required application and provide any information or documents requested by the Company.

3.2 The Company may accept or reject an application at its discretion and is not required to provide a reason.

3.3 By accepting this Agreement electronically, using the Affiliate Account or accepting Commission, the Affiliate agrees to be bound by this Agreement.

3.4 Once approved, the Affiliate is granted a non-exclusive and non-transferable right to introduce Prospective Clients to the Company through the Affiliate Link.

3.5 Approval as an Affiliate does not guarantee any referrals, Commission or minimum level of income.`,
      },
      {
        heading: '4. Affiliate’s Rights and Obligations',
        content: `4.1 The Affiliate may promote the Company using approved Promotional Materials, introduce Prospective Clients through the Affiliate Link and receive Commission in accordance with this Agreement.

4.2 The Affiliate must provide accurate and complete information to the Company and promptly notify the Company of any changes.

4.3 The Affiliate must act honestly, professionally and in good faith, comply with all Applicable Laws and maintain any required licence or authorisation.

4.4 The Affiliate must not make false or misleading statements, guarantee profits or present itself as an employee, agent or authorised representative of the Company.

4.5 Promotional Materials must not be changed or used outside their approved purpose without the Company’s prior approval.

4.6 The Affiliate must not provide investment advice, influence trading decisions, trade for a Client, manage or access a Client’s Account, or receive Client funds.

4.7 The Affiliate must comply with applicable privacy and marketing laws and clearly disclose its relationship with the Company and any Commission received where required.

4.8 The Affiliate must cooperate with the Company regarding compliance reviews, Client complaints and investigations and provide any requested information or documents.

4.9 The Affiliate must promptly notify the Company of any complaint, investigation or regulatory action that may affect its activities under this Agreement.

4.10 The Affiliate is responsible for its own business expenses, taxes, duties and other charges arising from its activities.`,
      },
      {
        heading: '5. Company’s Rights and Obligations',
        content: `5.1 The Company will perform its obligations under this Agreement in good faith.

5.2 The Company will provide the Affiliate with an Affiliate Link and access to available Promotional Materials, referral reports and Commission information.

5.3 The Company will track Introduced Clients, calculate Commission and make payments in accordance with this Agreement and the applicable Commission Plan.

5.4 The Company’s records will determine Client attribution, trading activity and Commission calculations, except in the case of an obvious error.

5.5 The Company may accept or reject any Prospective Client and may suspend or terminate any Client relationship in accordance with its policies and Applicable Laws.

5.6 All Introduced Clients remain Clients of the Company. The Company has sole control over Client registration, verification, Accounts, services and personal data.

5.7 The Company may monitor the Affiliate’s activities and Affiliate Site and require the Affiliate to amend or remove any content that does not comply with this Agreement.

5.8 The Company may investigate suspected fraud, abuse or breach of this Agreement and may temporarily suspend the Affiliate Account, Affiliate Link or Commission payments while the investigation is ongoing.

5.9 The Company may change the available Territories, products, services or Commission Plans in accordance with the amendment provisions of this Agreement.`,
      },
      {
        heading: '6. Commission Calculation and Payment',
        content: `6.1 The Affiliate may earn Commission under an approved Commission model described in Clause 25.

6.2 Commission rates and calculation methods may vary depending on the Commission model, Account type, trading instrument, trading volume, spread, Client deposit, traffic source and other conditions stated in the Commission Plan.

6.3 For Trading Commission, only closed transactions will qualify. A transaction lasting three (2) minutes or less will not qualify. Transaction duration is calculated from the time the position is opened until it is closed.

6.4 Transactions closed using the “Close By”, “Multiple Close By” or any similar function will not qualify for Commission unless otherwise stated in the Commission Plan.

6.5 Where Client funds include trading credits or bonuses, Trading Commission will be calculated only on the portion supported by the Client’s own funds.

6.6 No Commission will be payable where:

a) the Client is the Affiliate, its owner, director, employee, representative, household member, spouse, parent, child, sibling or another person whose Account is managed or controlled by the Affiliate;

b) transactions or other activities are performed mainly to generate Commission, including churning or artificial trading;

c) the activity involves Fraud Traffic or is fraudulent, abusive, unlawful, misleading or carried out in bad faith;

d) a transaction is cancelled, reversed or executed using an incorrect or non-market price;

e) a deposit is refunded, reversed or subject to a chargeback;

f) the Account, instrument, service, campaign or activity is not eligible under the Commission Plan;

g) the Client fails verification requirements or breaches the Client Agreement;

h) the Affiliate breaches this Agreement or Applicable Laws;

i) the Client was already registered with the Company, was referred through another channel or is attributed to another affiliate; or j) the Client does not satisfy the applicable qualifying requirements.

6.7 The Company may investigate suspicious activity and may delay, withhold, recalculate or cancel Commission while an investigation is ongoing or where an exclusion under Clause 6.6 applies.

6.8 Commission will be credited and paid according to the frequency, currency, minimum withdrawal amount and payment schedule displayed in the Affiliate Account or Commission Plan. Payments remain subject to verification and applicable payment fees.

6.9 The Company may deduct any overpayment, chargeback, refund, liability or Commission paid in error from current or future Commission.

6.10 The Company may change Commission rates, qualifying requirements or calculation methods by updating the Affiliate Account, Commission Plan or Company Website. Changes will apply to future qualifying activity from their effective date.

6.11 Any Commission dispute must be submitted within thirty (30) days of the relevant report or payment. If no dispute is submitted within this period, the report or payment will be considered accepted.

6.12 If an Introduced Client is unlinked from the Affiliate or assigned to another affiliate, the original Affiliate will not earn Commission from that Client’s future activity.

6.13 Before making a payment, the Company may require the Affiliate to complete KYC or KYB verification, confirm compliance with this Agreement and provide proof that the receiving account belongs to the Affiliate.

6.14 The Company will not be responsible for payment delays caused by incorrect payment information, incomplete verification or failure to provide requested documents.

6.15 Commission is payable only for Clients referred directly by the Affiliate. No Commission will be payable through a Sub-Affiliate or Referral Agent unless expressly approved by the Company.

6.16 The Company may correct or reverse Commission credited because of a technical error, system malfunction, incorrect calculation or duplicate payment.`,
      },
      {
        heading: '7. Use of Promotional Materials',
        content: `7.1 The Affiliate may use only Promotional Materials provided or approved by the Company.

7.2 Any material created by the Affiliate, including advertisements, websites, landing pages, social media content, emails and videos, must receive the Company’s prior written approval before publication.

7.3 Promotional Materials must be accurate, fair and not misleading and must include all risk warnings, disclosures and disclaimers required by the Company or Applicable Laws.

7.4 The Affiliate must not alter, remove or hide any Company logo, risk warning, disclaimer, link or other information contained in approved Promotional Materials.

7.5 Promotional Materials and the Company’s brand remain the Company’s property. The Affiliate receives a limited, non-exclusive, non-transferable and revocable right to use them only for the purposes of this Agreement.

7.6 The Affiliate is responsible for ensuring that any material it creates does not infringe the intellectual-property or other rights of any third party.

7.7 The Company may withdraw its approval or require Promotional Materials to be amended or removed.

The Affiliate must comply immediately or within the period specified by the Company.

7.8 When this Agreement ends, the Affiliate must immediately stop using and remove all Promotional Materials, Affiliate Links, Company branding and references suggesting an association with the Company.

7.9 The Affiliate grants the Company a non-exclusive and royalty-free right to use the Affiliate’s approved name, logo and brand materials for administering, monitoring and promoting the Affiliate Program during the term of this Agreement.`,
      },
      {
        heading: '8. Promotion Restrictions',
        content: `8.1 The Affiliate must not:

a) target persons under eighteen (18), any Restricted Territory or anyone who is not eligible to become a Client;

b) make false or misleading statements, guarantee profits, minimise trading risks or use fake reviews or testimonials;

c) send spam, unsolicited messages or marketing communications that do not comply with Applicable Laws;

d) use paid-search, paid-social-media or other paid advertising without the Company’s prior written approval;

e) bid on “Movement Markets”, its trademarks, misspellings or similar terms in search engines or advertising platforms;

f) register or use any domain name, application, social-media account or profile containing the Company’s name, trademarks or confusingly similar wording;

g) copy or imitate the Company Website or present an Affiliate Site as an official Company website;

h) use bots, forced clicks, cookie stuffing, fake registrations, misleading redirects, malware or any other artificial method of generating traffic or Commission;

i) promote the Company on websites or channels containing unlawful, fraudulent, discriminatory, violent, hateful, obscene or sexually explicit content;

j) offer unauthorised bonuses, rebates, gifts or other incentives, or share Commission with a Client, unless approved by the Company;

k) provide trading signals, recommendations or investment advice as part of its promotional activities;

l) interfere with another affiliate’s referrals or attempt to claim existing Clients as its own Introduced Clients;

m) attract Clients through cold calling, private messages, personal emails, telephone calls or face-to-face marketing without the Company’s prior written approval; or n) generate traffic through parked domains, error pages, pop-up networks or other traffic sources not approved by the Company.

8.2 The Affiliate must clearly identify itself as an independent affiliate and must not suggest that it is the Company or an official representative of the Company.

8.3 The Company may update its Restricted Territories, prohibited traffic sources and advertising requirements. The Affiliate is responsible for checking and following the latest requirements.

8.4 Where paid-search advertising is approved, the Affiliate must add “Movement Markets”, its trademarks, misspellings and similar brand terms as negative keywords.

8.5 A breach of this section may result in removal of Introduced Clients, cancellation of Commission, suspension of the Affiliate Account or termination of this Agreement.`,
      },
      {
        heading: '9. Data Protection and Privacy',
        content: `9.1 Each Party must comply with all Applicable Laws relating to privacy, electronic marketing and the protection of personal information (“Personal Data”).

9.2 The Affiliate may collect and use Personal Data only where necessary for its activities under this Agreement and must have a valid legal basis, provide an appropriate privacy notice and obtain consent where required.

9.3 The Affiliate must not request, collect or store a Client’s trading credentials, identification documents, payment information or Account access details unless expressly authorised by the Company.

9.4 The Affiliate must use appropriate technical and organisational measures to protect Personal Data against loss, unauthorised access, disclosure, alteration or misuse.

9.5 The Affiliate must notify the Company without undue delay, and where possible within twenty-four (24) hours, after becoming aware of any actual or suspected Personal Data breach relating to the Company or its Clients.

9.6 The Affiliate must cooperate with the Company regarding data-access requests, complaints, investigations, security incidents and regulatory requirements.

9.7 Personal Data must not be transferred to another country or disclosed to a third party unless permitted by Applicable Laws and protected by appropriate safeguards.

9.8 When Personal Data is no longer required, or when this Agreement ends, the Affiliate must securely delete or return it unless retention is required by law.

9.9 Unless otherwise agreed in writing, each Party acts independently regarding the Personal Data it collects. If the Affiliate processes Personal Data on behalf of the Company, the Company’s applicable data-processing terms will apply.`,
      },
      {
        heading: '10. Confidentiality',
        content: `10.1 “Confidential Information” means any non-public business, financial, technical, operational, compliance, Client, Commission or commercial information disclosed by one Party to the other in connection with this Agreement.

10.2 Each Party must keep Confidential Information secure, use it only for the purposes of this Agreement and not disclose it without the other Party’s prior written consent.

10.3 Confidential Information may be shared with employees, contractors or professional advisers who need it for the purposes of this Agreement and who are subject to appropriate confidentiality obligations.

10.4 Confidential Information does not include information that:

a) is publicly available without breach of this Agreement;

b) was lawfully known to the receiving Party before disclosure;

c) is independently developed without using the Confidential Information; or d) is lawfully received from a third party without confidentiality restrictions.

10.5 Where disclosure is required by law or a competent authority, the receiving Party must, where legally permitted, notify the other Party and disclose only the information required.

10.6 Upon request or termination of this Agreement, each Party must return or securely destroy the other Party’s Confidential Information, except where retention is required by law.

10.7 These confidentiality obligations continue for five (5) years after termination. Obligations relating to trade secrets and Personal Data continue for as long as the information remains protected by Applicable Laws.`,
      },
      {
        heading: '11. Suspension, Amendments and Termination',
        content: `11.1 This Agreement begins when the Affiliate’s application is approved and continues until terminated under this section.

11.2 The Company may amend this Agreement or any Commission Plan by giving without notice. An amendment may take effect immediately where required by Applicable Laws, a regulatory authority, security concerns or fraud prevention.

11.3 Amendments will not affect Commission validly earned before their effective date, except where the Commission resulted from fraud, abuse, breach, technical error or incorrect calculation.

11.4 Continued participation in the Affiliate Program after an amendment takes effect constitutes acceptance. If the Affiliate disagrees, it may terminate the Agreement before the effective date.

11.5 Either Party may terminate this Agreement without cause by giving five (5) Business Days’ written notice.

11.6 The Company may suspend the Affiliate Account, Affiliate Link, new Client attribution or Commission payments while investigating suspected misconduct or where the Affiliate fails to meet performance or traffic-quality requirements stated in the Commission Plan.

11.7 The Company may terminate this Agreement immediately if the Affiliate:

a) materially or repeatedly breaches this Agreement;

b) engages in fraud, abuse, churning, manipulation, unlawful activity or misleading conduct;

c) provides false information or fails to complete required verification;

d) loses a required licence, registration or authorisation;

e) breaches privacy, confidentiality or intellectual-property obligations;

f) causes material harm to the Company’s reputation or regulatory standing;

g) becomes insolvent, enters liquidation or ceases business; or h) creates a legal, regulatory or financial risk for the Company.

11.8 Upon termination, the Affiliate must immediately stop promoting the Company and remove all Affiliate Links, Promotional Materials, Company branding and references to the Affiliate Program.

11.9 Valid Commission earned before the effective termination date will be paid within sixty (60) days, subject to verification and any permitted deductions. No Commission will be payable where termination results from fraud, abuse or activity excluded under Clause 6.

11.10 After termination, no further Commission will be earned from Introduced Clients. The Company may continue providing services to those Clients.

11.11 Termination does not affect rights or obligations that arose before termination. Provisions intended to continueincluding confidentiality, data protection, intellectual property, indemnity and dispute provisionswill remain effective.`,
      },
      {
        heading: '12. Indemnity',
        content: `12.1 To the extent permitted by law, the Affiliate will indemnify and hold harmless the Company, its related companies, directors, officers, employees and service providers from any claims, losses, damages, penalties, liabilities and reasonable legal costs arising from:

a) the Affiliate’s breach of this Agreement or Applicable Laws;

b) false, misleading, unlawful or unapproved promotional activities;

c) any representation, advice, promise or service provided by the Affiliate to a Client;

d) fraud, negligence or intentional misconduct by the Affiliate;

e) infringement of intellectual-property or third-party rights;

f) misuse or unauthorised disclosure of Personal Data or Confidential Information; or g) any tax, fee or payment obligation for which the Affiliate is responsible.

12.2 The Company may deduct any amount reasonably payable under this section from Commission or other amounts owed to the Affiliate.

12.3 The Affiliate must promptly cooperate with the Company and provide any information or assistance reasonably required in relation to a claim.

12.4 The Company may control the defence or settlement of any claim covered by this section. The Affiliate must not admit liability or settle such a claim in the Company’s name without the Company’s prior written approval.`,
      },
      {
        heading: '13. Client Complaints',
        content: `13.1 The Affiliate must notify the Company in writing without delay, and no later than one (1) Business Day, after receiving or becoming aware of any complaint relating to the Company, its services or the Affiliate’s activities.

13.2 The Affiliate must direct the Client to the Company’s official complaints channel and must not present its own communication as an official response from the Company.

13.3 Without the Company’s prior written approval, the Affiliate must not admit liability, offer compensation, promise a refund or settle a complaint on behalf of the Company.

13.4 Upon request, the Affiliate must provide a complete report and all supporting records relating to the complaint within five (5) Business Days or any shorter period reasonably required by the Company.

13.5 The Affiliate must cooperate with the Company in investigating and resolving complaints and must preserve all relevant communications, marketing records and other evidence.

13.6 A complaint arising from the Affiliate’s own conduct or services will be handled by the Affiliate at its own cost. The Company may participate in or take control of the response where the complaint may affect the Company, its Clients or its regulatory obligations.

13.7 The Affiliate must promptly implement any corrective action reasonably required by the Company to prevent similar complaints.`,
      },
      {
        heading: '14. Notices and Communications',
        content: `14.1 Any notice or communication under this Agreement must be in writing and may be delivered by email, through the Affiliate Account or by another electronic method approved by the Company.

14.2 The Company may send notices to the Affiliate’s latest registered email address, publish them in the Affiliate Account or post general updates on the Company Website.

14.3 The Affiliate must send notices to the email address or communication channel designated by the Company on the Company Website or in the Affiliate Account.

14.4 A notice will be considered received:

a) when sent by email, provided no delivery-failure notification is received;

b) when published in the Affiliate Account; or c) when posted on the Company Website, where the notice relates generally to the Affiliate Program.

14.5 The Affiliate must keep its contact and payment information accurate and updated. Failure to receive a notice because of outdated or incorrect information will not affect the validity of that notice.

14.6 Communications by telephone or messaging applications will not constitute formal notice unless confirmed through an approved written channel.`,
      },
      {
        heading: '15. Entire Agreement',
        content: `15.1 This Agreement, together with the applicable Commission Plan, appendices and any document expressly incorporated into it, forms the entire agreement between the Parties concerning the Affiliate Program.

15.2 It replaces all previous discussions, proposals, communications, representations and agreements relating to the same subject matter.

15.3 The Affiliate confirms that it has not relied on any statement, promise or representation that is not included in this Agreement or an applicable Commission Plan.

15.4 If there is a conflict between this Agreement and a Commission Plan, the Commission Plan will apply only to Commission rates, calculations, qualifying conditions and payment arrangements. This Agreement will apply to all other matters.

15.5 Any separate promise or amendment made by the Affiliate or a Company representative will have no effect unless confirmed in writing by a person authorised by the Company.`,
      },
      {
        heading: '16. Affiliate Representations and Warranties',
        content: `16.1 By entering into this Agreement and throughout its duration, the Affiliate represents and confirms that:

a) if an individual, the Affiliate is at least eighteen (18) years old and has full legal capacity;

b) if a legal entity, it is properly established, validly existing and authorised to conduct its business;

c) it has full authority to enter into and perform this Agreement;

d) all information and documents provided to the Company are true, complete and accurate;

e) it has obtained and will maintain all licences, registrations, approvals and consents required for its activities;

f) its activities, Affiliate Sites and Promotional Materials comply with Applicable Laws and do not infringe third-party rights;

g) entering into this Agreement does not breach any other agreement or legal obligation binding on the Affiliate;

h) it is not located in, established in or operating from a Restricted Territory and is not subject to sanctions or other restrictions that prevent participation in the Affiliate Program; and i) it has disclosed its intended marketing channels, traffic sources and target Territories to the Company.

16.2 The Affiliate must immediately notify the Company if any representation in Clause 16.1 becomes incorrect, incomplete or misleading.

16.3 The Company may request evidence supporting these representations and may suspend the Affiliate Account or Commission payments until satisfactory evidence is provided.`,
      },
      {
        heading: '17. Limitation of Liability',
        content: `17.1 The Company does not guarantee that the Company Website, Affiliate Account, Affiliate Link, tracking systems or payment services will always be available, uninterrupted, secure or free from errors.

17.2 To the extent permitted by law, the Company will not be liable for:

a) any indirect, incidental, special or consequential loss;

b) loss of profit, revenue, business, opportunity, data, reputation or anticipated Commission;

c) interruptions, delays, technical failures, system errors or inaccurate tracking;

d) the actions or failures of a Client, payment provider, advertising platform or other third party;

e) failure to track a referral caused by incorrect links, blocked cookies, device settings or changes made by the Affiliate; or f) any decision to reject, restrict, suspend or terminate a Client in accordance with the Client Agreement or Applicable Laws.

17.3 The Affiliate participates in the Affiliate Program at its own business risk. The Company does not guarantee any minimum number of referrals, Clients, transactions, Commission or income.

17.4 The Company’s total liability arising from or connected with this Agreement will not exceed the total Commission paid or payable to the Affiliate during the six (6) months immediately before the event giving rise to the claim.

17.5 Nothing in this Agreement limits liability that cannot lawfully be excluded or limited, including liability for fraud or intentional misconduct by the Company.`,
      },
      {
        heading: '18. Force Majeure',
        content: `18.1 The Company will not be responsible for any failure, interruption or delay caused by an event outside its reasonable control, including:

a) natural disasters, fire, flood, earthquake or severe weather;

b) war, terrorism, civil unrest, sanctions or government action;

c) epidemic, pandemic or public-health emergency;

d) strikes, labour disputes or transport disruption;

e) power, internet, telecommunications, hosting or system failure;

f) cyberattack, malware or other security incident;

g) market closure, extreme market conditions or failure of an exchange, liquidity provider, bank, payment provider or other third party; or h) any change in law, regulation or action by a regulatory authority.

18.2 During a Force Majeure Event, the Company may suspend, delay or modify the Affiliate Program, Client attribution, Commission calculation or payments to the extent reasonably necessary.

18.3 The Company will notify the Affiliate where reasonably practicable and will resume affected obligations when it is reasonably able to do so.

18.4 If a Force Majeure Event continues for more than thirty (30) days, the Company may terminate the affected services or this Agreement without liability by giving written notice.`,
      },
      {
        heading: '19. Relationship of the Parties',
        content: `19.1 The Affiliate acts as an independent contractor. Nothing in this Agreement creates an employment, agency, partnership, joint venture, franchise or fiduciary relationship between the Parties.

19.2 The Affiliate has no authority to bind the Company, enter into contracts in its name, create obligations, offer credit, make commitments or accept liability on behalf of the Company.

19.3 The Affiliate is responsible for how it conducts its activities, including its personnel, working arrangements, business expenses, taxes and legal obligations. The Affiliate is not entitled to employee benefits from the Company.

19.4 This relationship is non-exclusive. The Company may appoint other affiliates, and the Affiliate may work with other businesses provided that doing so does not breach this Agreement or misuse the Company’s Confidential Information or intellectual property.

19.5 The Affiliate must not appoint a sub-affiliate, referral agent, subcontractor or other person to perform its obligations without the Company’s prior written approval. The Affiliate remains responsible for all actions and omissions of any approved person.`,
      },
      {
        heading: '20. Assignment and Transfer',
        content: `20.1 The Company may assign, transfer, novate or delegate any or all of its rights and obligations under this Agreement to a related company, successor, service provider or any person acquiring all or part of its business without requiring the Affiliate’s consent.

20.2 In connection with such a transfer, the Company may transfer relevant Affiliate information, verification records, communications, payment details and Commission balances in accordance with Applicable Laws.

20.3 The Affiliate must not assign, transfer, delegate, subcontract or otherwise dispose of any right or obligation under this Agreement without the Company’s prior written approval.

20.4 Any attempted transfer by the Affiliate without approval will have no effect. A material change in the ownership or control of a corporate Affiliate will be treated as a transfer requiring the Company’s prior approval.`,
      },
      {
        heading: '21. Severability and No Waiver',
        content: `21.1 If any provision of this Agreement is found to be invalid, unlawful or unenforceable, it will be modified to the minimum extent necessary or removed. The remaining provisions will continue in full effect.

21.2 A failure or delay by either Party in exercising any right or remedy will not operate as a waiver of that right or remedy.

21.3 Any waiver must be given in writing and will apply only to the specific matter for which it was given. A waiver of one breach will not constitute a waiver of any future breach.

21.4 The rights and remedies available under this Agreement are cumulative and do not exclude any rights or remedies available under Applicable Laws.`,
      },
      {
        heading: '22. Governing Law and Jurisdiction',
        content: `22.1 This Agreement and any contractual or non-contractual dispute arising from it will be governed by the laws of Saint Lucia.`,
      },
      {
        heading: '23. Language',
        content: `23.1 This Agreement is made in English.

23.2 Any translation is provided for convenience only. If there is any difference or inconsistency, the English version will prevail.`,
      },
      {
        heading: '24. Survival',
        content: `24.1 Any provision that is intended by its nature to continue after termination will remain effective, including provisions relating to Commission adjustments, confidentiality, data protection, intellectual property, indemnity, limitation of liability and governing law.

24.2 Termination will not release either Party from any right, obligation or liability that arose before the termination date.`,
      },
      {
        heading: '25. Affiliate Types and Commission Models',
        content: `25.1 The Company may offer one or more of the following Commission models:

a) Trading Commission: payment based on Qualifying Transactions completed by Introduced Clients;

b) Cost Per Acquisition (CPA): a fixed payment for each Qualified Client;

c) Cost Per Lead (CPL): a fixed payment for an eligible Prospective Client who meets the applicable requirements;

d) Revenue Share: a percentage of eligible net revenue generated by Introduced Clients;

e) Hybrid: a combination of two or more Commission models;

f) Sub-Affiliate Commission: payment based on eligible activity generated through an approved Sub-Affiliate or Referral Agent;

g) Cost Per Install (CPI): payment for each valid installation of the Company’s approved application that meets the applicable requirements;

h) Cost Per Mille (CPM): payment for every one thousand valid advertising impressions; or i) Flat Fee: a fixed payment for specified promotional services or campaigns approved by the Company.

25.2 The Commission model applicable to the Affiliate, together with its rates, qualifying conditions and payment arrangements, will be displayed in the Affiliate Account or otherwise communicated by the Company.

25.3 Participation in any Commission model requires the Company’s approval. The Affiliate has no automatic right to participate in a particular model.

25.4 Unless expressly permitted by the Company, only one Commission model will apply to the same Client or activity, and no duplicate Commission will be payable.

25.5 The Company may change the Affiliate’s Commission model based on performance, traffic quality, compliance or commercial requirements. Any change will apply to future qualifying activity from its effective date.`,
      },
      {
        heading: '26. Sub-affiliates and Referral Agents',
        content: `26.1 A “Referral Agent” or “Sub-Affiliate” means a person approved to introduce Prospective Clients through or on behalf of an Affiliate.

26.2 The Affiliate must not appoint a Referral Agent or Sub-Affiliate without the Company’s prior written approval. The Company may require that person to complete registration, verification and acceptance procedures.

26.3 The Affiliate is responsible for ensuring that each approved Referral Agent or Sub-Affiliate complies with this Agreement, Applicable Laws and the Company’s promotional requirements.

26.4 Introduced Clients and Commission will be attributed according to the Company’s tracking records and the applicable Commission Plan.

26.5 Unless the Company expressly agrees to make direct payments, the Affiliate is responsible for paying any amount agreed with a Referral Agent or Sub-Affiliate.

26.6 The Company is not a party to any private arrangement between the Affiliate and a Referral Agent or Sub-Affiliate and is not responsible for enforcing it or resolving related payment disputes.

26.7 The Company may reject, suspend, unlink or terminate any Referral Agent or Sub-Affiliate at any time. Termination of the principal Affiliate’s Agreement will also end any related sub-affiliate arrangement unless the Company decides otherwise.`,
      },
    ],
  },
  {
    id: 'terms-of-use',
    title: 'Website Terms of Use',
    shortTitle: 'Terms of Use',
    category: 'Platform & Website',
    lastUpdated: 'September 2026',
    description: 'The terms that govern your use of the Movement Markets website and online content.',
    sections: [
      {
        heading: 'Introduction',
        content: `The terms that govern your use of the Movement Markets website and online content.`,
      },
      {
        heading: 'Acceptance',
        content: `By accessing the website you agree to these terms and to use the site lawfully and in good faith.`,
      },
      {
        heading: 'Intellectual property',
        content: `All content, trademarks, logos and materials are owned by or licensed to Movement Markets and may not be copied or used without permission.`,
      },
      {
        heading: 'Information only, not advice',
        content: `Website content is general information only, is not investment advice, and is not an offer or solicitation where unlawful.`,
      },
      {
        heading: 'Availability & accuracy',
        content: `Movement Markets aims to keep content accurate and the site available but does not guarantee either, and may modify or suspend the site at any time.`,
      },
      {
        heading: 'Third-party links',
        content: `Links to third-party sites are provided for convenience; Movement Markets is not responsible for their content.`,
      },
      {
        heading: 'Limitation of liability',
        content: `To the maximum extent permitted by law, Movement Markets excludes liability for loss arising from website use; you use the site at your own risk and indemnify Movement Markets for misuse.

These terms are governed by the laws of Saint Lucia and may be updated at any time.`,
      },
    ],
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    shortTitle: 'Privacy Policy',
    category: 'Privacy & Data',
    lastUpdated: 'September 2026',
    description: 'How Movement Markets collects, uses, stores and shares your personal information.',
    sections: [
      {
        heading: 'Introduction',
        content: `Movement Markets Ltd ("Movement Markets", "we", "us" or "our") respects your privacy and is committed to protecting your personal information. Movement Markets Ltd is registered in Saint Lucia under Registration No. 2026-00660, with its registered office at Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. This Privacy Policy explains how we collect, use, store and share information when you visit www.movementmarkets.com, open an account or use our trading services.`,
      },
      {
        heading: '1. Information we collect',
        content: `Depending on how you interact with Movement Markets, we may collect:

• Personal and contact details, including your name, date of birth, nationality, address, email and telephone number

• Identity, verification and compliance documents, including information required for KYC and anti-money-laundering checks.

• Employment, financial, tax-residency, source-of-funds, source-of-wealth, trading-experience and risk-profile information.

• Account, payment, deposit, withdrawal, transaction and trading information.

• Device, IP address, browser, website-usage, security-log and cookie information.

• Emails, calls, chats and other communications with us.

We may collect this information directly from you or from lawful sources such as banks, payment providers, identityverification providers, affiliates, public records and fraud-prevention services.`,
      },
      {
        heading: '2. How we use your information',
        content: `We may use your information to:

• Open, verify, administer and secure your account.

• Provide trading services, customer support and account communications.

• Process deposits, withdrawals and other transactions.

• Conduct KYC, sanctions, anti-money-laundering, fraud and risk checks.

• Monitor trading and account activity and protect our services.

• Meet legal, tax, accounting, reporting and recordkeeping obligations.

• Improve our website, platforms and services, and send permitted marketing communications.

We process information based on your consent, our contract with you, our legal obligations and our legitimate business interests. We may use automated tools to support identity verification, fraud detection, compliance monitoring and risk assessments, with human review where required by law.`,
      },
      {
        heading: '3. Sharing your information',
        content: `We may share relevant information with Movement Markets group companies; banks and payment processors; identity-verification, compliance and fraud-prevention providers; trading-platform, hosting, technology and support providers; auditors, lawyers and professional advisers; and government, law-enforcement or other competent authorities where required or permitted by law.

We do not sell your personal information.`,
      },
      {
        heading: '4. International transfers',
        content: `Your information may be processed outside Saint Lucia or your country of residence. Where required, we use an appropriate legal basis, safeguards and authorisations for international data transfers.`,
      },
      {
        heading: '5. Data retention',
        content: `We keep information only for as long as necessary to provide our services and meet legal, financial, anti-money-laundering and dispute-resolution obligations. Certain account, identity and transaction records may be retained for at least seven years after your relationship with Movement Markets ends where required by law.`,
      },
      {
        heading: '6. Cookies',
        content: `We use cookies and similar technologies to operate and secure our website, remember preferences, understand website usage and support permitted marketing activities. You can manage optional cookies through our cookie banner or browser settings. Disabling certain cookies may affect website functionality.`,
      },
      {
        heading: '7. Security',
        content: `We use reasonable technical and organisational safeguards designed to protect information from unauthorised access, loss, misuse or disclosure. However, no internet-based service can be guaranteed to be completely secure.`,
      },
      {
        heading: '8. Your rights',
        content: `Subject to applicable law, you may ask to access, correct, update, delete or restrict your personal information; object to certain processing or direct marketing; withdraw consent; request a copy of your information; or complain to the relevant dataprotection authority. Some rights may be limited where we must retain or process information to meet legal obligations.`,
      },
      {
        heading: '9. Marketing',
        content: `You may unsubscribe from marketing at any time by using the unsubscribe option in our messages or contacting us. You will continue to receive essential account, transaction, security and legal communications.`,
      },
      {
        heading: '10. Children',
        content: `Movement Markets’ services are not intended for anyone under 18 years of age. We do not knowingly open accounts for children.`,
      },
      {
        heading: '11. Third-party services',
        content: `Our website or services may link to third-party websites, payment pages, trading platforms or verification services. Independent third parties are responsible for their own privacy practices, and you should review their privacy notices.`,
      },
      {
        heading: '12. Changes to this Policy',
        content: `We may update this Privacy Policy when our services, providers or legal obligations change. The latest version will be published on our website with the revised date.`,
      },
      {
        heading: '13. Contact us',
        content: `For privacy questions, complaints or requests, contact Movement Markets Ltd at support@movementmarkets.com or write to Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. Website: www.movementmarkets.com`,
      },
    ],
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    shortTitle: 'Cookie Policy',
    category: 'Privacy & Data',
    lastUpdated: 'September 2026',
    description: 'How Movement Markets uses cookies and similar technologies across its website and platforms.',
    sections: [
      {
        heading: 'Introduction',
        content: `How Movement Markets uses cookies and similar technologies across its website and platforms.`,
      },
      {
        heading: 'How we use cookies',
        content: `• Cookies are small files stored on your device that help websites function, remember your preferences and measure usage.

• We use strictly necessary cookies (function and security), performance and analytics cookies, functional cookies, and (with consent) marketing cookies.

• Non-essential cookies are set only with your consent via our cookie banner; you can change or withdraw consent at any time.

• You can manage or disable cookies in your browser; disabling some may affect site functionality. Some cookies are set by third parties (for example, analytics and affiliate tracking) under their own policies.

We may update this Policy from time to time and will publish the current version on our website.`,
      },
    ],
  },
];
