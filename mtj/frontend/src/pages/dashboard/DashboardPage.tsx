import { HeroSection } from './HeroSection'
import MarketSection from './MarketSection'

type Props = {}

export default function DashboardPage({}: Props) {
  return (
    <div>
 <div>
        <HeroSection />
    </div>
    <div>
      <MarketSection />
    </div>
    </div>
  
  )
}