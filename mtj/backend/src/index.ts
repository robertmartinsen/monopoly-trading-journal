import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()
const PORT = process.env.PORT || 5001
const API_KEY = "LZNZJ9MKC7CVGUAP"

app.use(cors())
app.use(express.json())

const indices = ["^IXIC", "TSLA", "^FTSE"]

app.get("/api/market-status", async (req, res) => {
  try {
    const promises = indices.map((symbol) =>
      axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: "GLOBAL_QUOTE",
          symbol: symbol,
          apikey: API_KEY,
        },
      })
    )

    const responses = await Promise.all(promises)

    const marketData = responses.map((response) => {
      if (response.data && response.data["Global Quote"]) {
        return response.data["Global Quote"]
      } else {
        return null
      }
    })

    res.json(marketData)
  } catch (error) {
    console.error("Error fetching market status:", error)
    res.status(500).json({ error: "Failed to fetch market status data" })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
