"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../components/card"
import { Tabs, TabsList, TabsTrigger } from "../components/tabs"
import { Button } from "../components/button"
import { Badge } from "../components/badge"
import { Percent, Coins, AlertCircle, TrendingUp } from "lucide-react"
import { Progress } from "../components/progress"
import { Slider } from "../components/slider"
import { Input } from "../components/input"

export default function StakingPage() {
  const [activeTab, setActiveTab] = useState("stake")
  const [stakeAmount, setStakeAmount] = useState<number>(0)
  const [stakeDuration, setStakeDuration] = useState<number>(30)

  // Calculate estimated rewards based on amount and duration
  const calculateRewards = () => {
    // This is a simplified calculation - would be replaced with actual contract logic
    const baseApy = 5.5
    const durationBonus = stakeDuration >= 90 ? 1.5 : stakeDuration >= 60 ? 1 : stakeDuration >= 30 ? 0.5 : 0
    const apy = baseApy + durationBonus

    const dailyRate = apy / 365 / 100
    const estimatedReward = stakeAmount * dailyRate * stakeDuration

    return {
      apy: apy.toFixed(1),
      estimatedReward: estimatedReward.toFixed(2),
    }
  }

  const { apy, estimatedReward } = calculateRewards()

  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-3xl font-bold">Staking</h1>
        <p className="text-gray-400 mt-1">Earn rewards by staking your KLM tokens</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-black/40 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-orange-500/10 p-2 text-orange-500">
                <Coins className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 text-2xl font-bold">1,250 KLM</div>
            <div className="text-sm text-gray-400">Your Staked Tokens</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-orange-500/10 p-2 text-orange-500">
                <Percent className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 text-2xl font-bold">6.5%</div>
            <div className="text-sm text-gray-400">Current APY</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-orange-500/10 p-2 text-orange-500">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 text-2xl font-bold">85.2 KLM</div>
            <div className="text-sm text-gray-400">Earned Rewards</div>
          </CardContent>
        </Card>
      </div>

      {/* Staking Interface */}
      <Card className="bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <Tabs defaultValue="stake" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 max-w-md bg-gray-900/50 p-1">
              <TabsTrigger value="stake">Stake Tokens</TabsTrigger>
              <TabsTrigger value="unstake">Unstake Tokens</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          {activeTab === "stake" ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount to Stake</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="0"
                    min="0"
                    className="bg-gray-900/70 border-white/10"
                    value={stakeAmount || ""}
                    onChange={(e) => setStakeAmount(Number(e.target.value))}
                  />
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Max
                  </Button>
                </div>
                <div className="text-xs text-gray-400">Available: 2,500 KLM</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Staking Duration</label>
                  <span className="text-sm text-gray-400">{stakeDuration} days</span>
                </div>
                <Slider
                  defaultValue={[30]}
                  min={7}
                  max={365}
                  step={1}
                  onValueChange={(value) => setStakeDuration(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>7 days</span>
                  <span>30 days</span>
                  <span>90 days</span>
                  <span>365 days</span>
                </div>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-md space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">APY</span>
                  <span className="text-sm font-medium text-green-400">{apy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Estimated Rewards</span>
                  <span className="text-sm font-medium">{estimatedReward} KLM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Unlock Date</span>
                  <span className="text-sm font-medium">
                    {new Date(Date.now() + stakeDuration * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-md flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-orange-500 font-medium">Important</p>
                  <p className="text-xs text-gray-300">
                    Staked tokens are locked for the duration of the staking period. Early unstaking may result in
                    reduced rewards.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Your Staked Positions</h3>

                <div className="space-y-4">
                  <StakedPositionCard
                    amount={750}
                    startDate="Jan 15, 2023"
                    endDate="Apr 15, 2023"
                    apy={6.5}
                    progress={75}
                    earned={36.8}
                  />

                  <StakedPositionCard
                    amount={500}
                    startDate="Feb 22, 2023"
                    endDate="May 22, 2023"
                    apy={7.0}
                    progress={50}
                    earned={17.5}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {activeTab === "stake" ? (
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              disabled={!stakeAmount || stakeAmount <= 0}
            >
              Stake Tokens
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  )
}

interface StakedPositionCardProps {
  amount: number
  startDate: string
  endDate: string
  apy: number
  progress: number
  earned: number
}

function StakedPositionCard({ amount, startDate, endDate, apy, progress, earned }: StakedPositionCardProps) {
  return (
    <Card className="bg-gray-900/50 border-white/10">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium">{amount} KLM</div>
          <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">Active</Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">APY</span>
            <span className="text-green-400">{apy}%</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Start Date</span>
            <span>{startDate}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">End Date</span>
            <span>{endDate}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Earned</span>
            <span>{earned} KLM</span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
          Unstake
        </Button>
      </CardFooter>
    </Card>
  )
}

