import React, { useEffect, useState } from "react";
import axios from "axios";

interface MarketData {
  "01. symbol": string;
  "05. price": string;
  "10. change percent": string;
}

const MarketSection: React.FC = () => {
  const [marketStatus, setMarketStatus] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketStatus = async () => {
      try {
        const response = await axios.get("/api/market-status");
        if (Array.isArray(response.data)) {
          setMarketStatus(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching market status:", error);
        setLoading(false);
      }
    };

    fetchMarketStatus();
  }, []);

  return (
    <div className="market-section">
      <h1>Market Status</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Current Price</th>
              <th>Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {marketStatus.map((data, index) => (
              <tr key={index}>
                <td>{data["01. symbol"]}</td>
                <td>{data["05. price"]}</td>
                <td>{data["10. change percent"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MarketSection;
