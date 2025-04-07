import MadagascarFlow from "./madagascar-flow"

export default function MadagascarInitiativePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Madagascar Housing Initiative</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Building sustainable homes through innovative tokenized property deeds with social impact integration
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Initiative Overview</h2>
            <p className="text-gray-300 mb-6">
              The Madagascar Housing Initiative aims to create affordable, sustainable housing while generating returns
              for investors and creating a positive social impact. By tokenizing $10,000 property deeds and integrating
              with Gooddollar&apos;s UBI platform, we&apos;re creating a self-sustaining ecosystem that benefits all
              stakeholders.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Affordable Housing</h3>
                <p className="text-gray-400">
                  Creating quality homes in Madagascar at $10,000 per unit with a rent-to-own model that empowers local
                  residents.
                </p>
              </div>
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Social Impact</h3>
                <p className="text-gray-400">
                  70% of funds are reinvested in Gooddollar, supporting universal basic income while generating
                  sustainable returns.
                </p>
              </div>
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Investor Returns</h3>
                <p className="text-gray-400">
                  Structured to provide competitive returns while creating lasting social impact through a transparent
                  model.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Structure */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Investment Structure</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Property Deed Tokens</h3>
              <p className="text-gray-300 mb-4">
                Our primary investment vehicle will be the Madagascar Property Deed Token, priced at $10,000 per unit.
                Each token represents ownership in a single housing unit with the following allocation:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>30% allocated directly to the Construction Fund for building homes</li>
                <li>70% invested in Gooddollar (G$) through staking until needed for further development</li>
                <li>Rent-to-own structure allows eventual ownership transfer to residents</li>
                <li>Returns generated from both rental income and G$ staking rewards</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">T-Bond Integration (Separate Entity)</h3>
              <p className="text-gray-300 mb-4">
                UAE T-bonds are offered as a separate investment vehicle that complements the Property Deed Tokens:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>T-bonds can be staked to generate LST AED tokens</li>
                <li>LST AED can be invested in various projects, including our Madagascar initiative</li>
                <li>This creates a separate liquidity pool that can support the housing ecosystem</li>
                <li>T-bond investors maintain full liquidity while still contributing to social impact</li>
              </ul>
            </div>

            {/* Flow Diagram */}
            <MadagascarFlow />
          </div>

          {/* Rent-to-Own Mechanism */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Rent-to-Own Mechanism</h2>
            <p className="text-gray-300 mb-6">
              Our innovative rent-to-own structure allows residents to gradually build ownership in their homes while
              providing stable returns to investors.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Structure</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Initial property value: $10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Ownership transfer premium: 25% ($12,500 total buyout)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Standard term: 7 years (84 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Monthly payment: Base rent + Ownership contribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Ownership contribution: ~$149/month ($12,500 ÷ 84)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Residents build equity with each payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Investors receive predictable returns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>25% premium provides attractive investor yield</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Capital recycled into new construction after buyout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Creates sustainable housing development cycle</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">Example Calculation</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 px-4">Component</th>
                      <th className="text-right py-2 px-4">Amount</th>
                      <th className="text-left py-2 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Property Value</td>
                      <td className="py-2 px-4 text-right">$10,000</td>
                      <td className="py-2 px-4">Initial construction cost</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Ownership Premium</td>
                      <td className="py-2 px-4 text-right">25%</td>
                      <td className="py-2 px-4">Return to investors</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Total Buyout Amount</td>
                      <td className="py-2 px-4 text-right">$12,500</td>
                      <td className="py-2 px-4">$10,000 + 25% premium</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Term</td>
                      <td className="py-2 px-4 text-right">84 months</td>
                      <td className="py-2 px-4">7 years</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Base Monthly Rent</td>
                      <td className="py-2 px-4 text-right">$50</td>
                      <td className="py-2 px-4">Maintenance & management</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Ownership Contribution</td>
                      <td className="py-2 px-4 text-right">$149</td>
                      <td className="py-2 px-4">$12,500 ÷ 84 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Total Monthly Payment</td>
                      <td className="py-2 px-4 text-right font-medium">$199</td>
                      <td className="py-2 px-4">$50 + $149</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Superfluid Integration */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Superfluid Payment Streaming</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="md:w-1/3">
                <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-green-500/20 mx-auto flex items-center justify-center">
                      <span className="text-green-500 font-bold text-2xl">Superfluid</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-300 mb-4">
                  We utilize Superfluid's streaming payment protocol to create a subscription model for tenants,
                  enabling real-time, continuous payments to deed owners in exchange for fractional ownership
                  accumulation.
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                  <li>Tenants make continuous, second-by-second payments rather than monthly lump sums</li>
                  <li>Deed owners receive streaming income in real-time, improving cash flow</li>
                  <li>Ownership percentage accumulates continuously as payments stream</li>
                  <li>Smart contracts automatically track ownership accumulation</li>
                </ul>
                <p className="text-gray-300">
                  This innovative approach eliminates payment delays, reduces administrative overhead, and creates a
                  more transparent ownership transfer process that benefits both residents and investors.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">How Superfluid Streaming Works</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="text-green-500 text-3xl mb-2">1</div>
                  <div className="text-gray-300">Tenant opens payment stream</div>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="text-green-500 text-3xl mb-2">2</div>
                  <div className="text-gray-300">Funds flow continuously to deed owners</div>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="text-green-500 text-3xl mb-2">3</div>
                  <div className="text-gray-300">Ownership percentage increases in real-time</div>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="text-green-500 text-3xl mb-2">4</div>
                  <div className="text-gray-300">Full ownership transfers at completion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Gooddollar Integration */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Gooddollar Integration</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="md:w-1/3">
                <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
                  {/* Note: Replace with actual Gooddollar logo */}
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-blue-500/20 mx-auto flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-2xl">G$</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-300 mb-4">
                  70% of property deed investments are allocated to Gooddollar (G$), a protocol that delivers universal
                  basic income (UBI) to people worldwide. This creates a dual impact:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                  <li>Supporting global UBI distribution to reduce poverty</li>
                  <li>Generating staking rewards that fund additional housing development</li>
                  <li>Creating a sustainable cycle of social impact</li>
                </ul>
                <p className="text-gray-300">
                  Funds are staked on the Gooddollar platform until needed for further construction, allowing capital to
                  generate both financial returns and social impact simultaneously.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">Impact Metrics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-700 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">5%</div>
                  <div className="text-gray-300">Estimated Annual G$ Yield</div>
                </div>
                <div className="border border-gray-700 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">2-4</div>
                  <div className="text-gray-300">Additional Homes Per Year from Yield</div>
                </div>
                <div className="border border-gray-700 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                  <div className="text-gray-300">UBI Recipients Supported Per Home</div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Model */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Financial Model</h2>
            <p className="text-gray-300 mb-6">
              Our financial model demonstrates how the Madagascar Housing Initiative creates a sustainable cycle of
              development and returns:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4">Phase</th>
                    <th className="text-right py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">Initial Investment</td>
                    <td className="py-3 px-4 text-right">$1,000,000</td>
                    <td className="py-3 px-4">100 Property Deed Tokens at $10,000 each</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">Construction Fund</td>
                    <td className="py-3 px-4 text-right">$300,000</td>
                    <td className="py-3 px-4">30% allocation for immediate construction</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">Gooddollar Investment</td>
                    <td className="py-3 px-4 text-right">$700,000</td>
                    <td className="py-3 px-4">70% allocation to G$ staking</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">Annual G$ Yield (5% avg)</td>
                    <td className="py-3 px-4 text-right">$35,000</td>
                    <td className="py-3 px-4">Reinvested in additional construction</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">Annual Rental Income</td>
                    <td className="py-3 px-4 text-right">$60,000</td>
                    <td className="py-3 px-4">$50/month × 100 homes × 12 months</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">Annual Ownership Contributions</td>
                    <td className="py-3 px-4 text-right">$178,800</td>
                    <td className="py-3 px-4">$149/month × 100 homes × 12 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Total Annual Return</td>
                    <td className="py-3 px-4 text-right font-medium">$273,800</td>
                    <td className="py-3 px-4">27.4% gross return on initial investment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-gray-300">
              <p className="mb-4">
                <strong>Sustainability Model:</strong> As homes are fully purchased by residents (after 7 years), the
                capital is recycled into new construction, creating a self-sustaining development cycle.
              </p>
              <p>
                <strong>Expansion Potential:</strong> The model can be scaled to additional regions beyond Madagascar as
                the capital base grows through reinvestment and new investor participation.
              </p>
            </div>
          </div>

          {/* Meet the Team Section */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Meet the Team</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Estelle Razanamala</h3>
                <p className="text-orange-400 mb-2">Director</p>
                <p className="text-gray-300">Technical Lead in Product Development (Madagascan)</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Charli Joamamy</h3>
                <p className="text-orange-400 mb-2">Director</p>
                <p className="text-gray-300">Construction & Operations (Madagascan)</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Guillermo Jones</h3>
                <p className="text-orange-400 mb-2">Director</p>
                <p className="text-gray-300">CTO Blockchain and Cloud Computing (ES)</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Hardeep Singh</h3>
                <p className="text-orange-400 mb-2">Back-end Programmer</p>
                <p className="text-gray-300">(UAE)</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Tamar Ali</h3>
                <p className="text-orange-400 mb-2">Frontend Design</p>
                <p className="text-gray-300">(UAE)</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How is my investment secured?</h3>
                <p className="text-gray-300">
                  Your investment is secured by the physical property assets in Madagascar, with each property deed
                  token representing direct ownership in a specific housing unit. The legal structure ensures your
                  ownership rights are protected.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What happens if a resident defaults on payments?</h3>
                <p className="text-gray-300">
                  Our local management team handles any payment issues. If a resident defaults, the property can be
                  reassigned to a new resident without affecting investor returns. We maintain a waiting list of
                  qualified residents to minimize vacancy periods.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How liquid is my investment?</h3>
                <p className="text-gray-300">
                  Property deed tokens can be traded on our secondary market, providing liquidity options. Additionally,
                  T-bond investments maintain their inherent liquidity while still contributing to the initiative
                  through the LST mechanism.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How is the Gooddollar integration managed?</h3>
                <p className="text-gray-300">
                  The 70% allocation to Gooddollar is managed through our treasury, which handles the staking process
                  and yield reinvestment. Regular reports provide transparency on G$ yields and their impact on both UBI
                  distribution and housing development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How does the Superfluid payment streaming work?</h3>
                <p className="text-gray-300">
                  Superfluid enables continuous, real-time payment streams from tenants to deed owners. This creates a
                  subscription-like model where ownership accumulates with each passing second rather than in monthly
                  increments. The system is fully automated through smart contracts, providing transparency and reducing
                  administrative overhead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

