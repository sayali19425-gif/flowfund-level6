import { useState } from "react";
import { sendGaslessPayment } from "../stellar/feeSponsor";

export default function GaslessPayment() {
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    // Input validation
    if (!destination || destination.trim().length === 0) {
      setError("Destination address is required")
      return
    }

    if (!destination.startsWith('G') || destination.trim().length !== 56) {
      setError("Invalid Stellar address — must start with G and be 56 characters")
      return
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Amount must be a positive number")
      return
    }

    if (parseFloat(amount) > 10000) {
      setError("Amount cannot exceed 10,000 XLM per transaction")
      return
    }

    setLoading(true)
    setError(null)
    setTxHash(null)

    try {
      const senderSecret = import.meta.env.VITE_SPONSOR_SECRET
      const hash = await sendGaslessPayment(
        senderSecret,
        destination.trim(),
        amount
      )
      setTxHash(hash)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <h2>Send Money (Gasless)</h2>
        <p style={{ color: "gray", fontSize: 14, lineHeight: 1.6 }}>
          No XLM needed for fees — FlowFund sponsors your transaction.
        </p>

        <div style={{
          background: 'rgba(0,229,255,0.05)',
          border: '1px solid rgba(0,229,255,0.15)',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
          fontSize: 13,
          color: '#5a7090',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: '#00e5ff' }}>How it works:</strong>
          <br />
          1. Enter the recipient's Stellar wallet address (starts with G...)
          <br />
          2. Enter the amount in XLM you want to send
          <br />
          3. Click Send — FlowFund pays the network fee for you!
          <br />
          <strong style={{ color: '#00e5ff' }}>Need a testnet wallet?</strong> Install{' '}
          <a href="https://www.freighter.app/" target="_blank" rel="noreferrer" 
            style={{ color: '#00e5ff' }}>Freighter Wallet</a> and fund it at{' '}
          <a href="https://friendbot.stellar.org" target="_blank" rel="noreferrer"
            style={{ color: '#00e5ff' }}>Friendbot</a>
        </div>

      <input
        placeholder="Destination public key (G...)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 12,
          borderRadius: 6,
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      <input
        placeholder="Amount (XLM)"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 12,
          borderRadius: 6,
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading || !destination || !amount}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 6,
          border: "none",
          background: loading ? "#aaa" : "#6C63FF",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: 15,
        }}
      >
        {loading ? "Sending..." : "Send (Fee Sponsored)"}
      </button>

      {txHash && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: "#e6f9ee",
            borderRadius: 6,
          }}
        >
          <strong>Success!</strong>
          <br />
          <a
            href={`https://stellar.expert/explorer/testnet/tx/${txHash}`}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 13, wordBreak: "break-all" }}
          >
            View on Stellar Explorer
          </a>
        </div>
      )}

      {error && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: "#fdecea",
            borderRadius: 6,
            color: "#c0392b",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}