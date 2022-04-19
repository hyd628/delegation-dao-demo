import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";
import logo from '../moonbeamlogo.png'; 
import { SyncOutlined } from "@ant-design/icons";

import { Address, Balance, Events } from "../components";

export default function ExampleUI({
  purpose,
  target,
  totalStake,
  currentState,
  memberStake,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const [newStake, setNewStake] = useState("loading...");
  const [withdrawalAddress, setWithdrawalAddress] = useState("loading...");

  const chainState = ["Collecting", "Staking", "Revoking", "Revoked"];

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 800, margin: "auto", marginTop: 64 }}>
        <img src={logo} alt="Logo" />;

        
        <h1>Delegation DAO Example UI:</h1>
        <h2>Target Collator: {target}</h2>
        <h2>Total Stake: {totalStake ? utils.formatEther(totalStake) : "..."}</h2>
        <h2>Member Stake: {memberStake ? utils.formatEther(memberStake) : "..."}</h2>
        <h2>Current DAO State: {chainState[currentState]}</h2>
        <Divider />
        <div style={{ margin: 8 }}>
          <h2>Add Stake Amount: </h2>
          <Input
            onChange={e => {
              setNewStake(e.target.value);
            }}
          />
          <Button
            type="primary"
            style={{marginTop: 8}}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              const result = tx(writeContracts.DelegationDAO.add_stake({
                value: utils.parseEther(newStake)
              }), update => {
                console.log("📡 Transaction Update:", update);
                if (update && (update.status === "confirmed" || update.status === 1)) {
                  console.log(" 🍾 Transaction " + update.hash + " finished!");
                  console.log(
                    " ⛽️ " +
                      update.gasUsed +
                      "/" +
                      (update.gasLimit || update.gas) +
                      " @ " +
                      parseFloat(update.gasPrice) / 1000000000 +
                      " gwei",
                  );
                }
              });
              console.log("awaiting metamask/web3 confirm result...", result);
              console.log(await result);
            }}
          >
            Add Stake to DAO
          </Button>
        </div>
        <Divider />
        <div style={{ margin: 8 }}>
          <Button
            type="primary"
            onClick={() => {
              /* look how we call setPurpose AND send some value along */
              tx(
                writeContracts.DelegationDAO.schedule_revoke()
              );
              /* this will fail until you make the setPurpose function payable */
            }}
          >
           Schedule Revoke
          </Button>
        </div>
        <Divider />
        <div style={{ margin: 8 }}>
          <h2>Withdrawl Address:</h2>
          <Input
            onChange={e => {
              setWithdrawalAddress(e.target.value);
            }}
          />
          <Button
            type="primary"
            style={{ marginTop: 8
            }}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              const result = tx(writeContracts.DelegationDAO.withdraw(withdrawalAddress), update => {
                console.log("📡 Transaction Update:", update);
                if (update && (update.status === "confirmed" || update.status === 1)) {
                  console.log(" 🍾 Transaction " + update.hash + " finished!");
                  console.log(
                    " ⛽️ " +
                      update.gasUsed +
                      "/" +
                      (update.gasLimit || update.gas) +
                      " @ " +
                      parseFloat(update.gasPrice) / 1000000000 +
                      " gwei",
                  );
                }
              });
              console.log("awaiting metamask/web3 confirm result...", result);
              console.log(await result);
            }}
          >
            Withdraw Stake
          </Button>
        </div>
    </div>
    </div>
  );
  
}
