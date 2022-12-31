// add the game address here and update the contract name if necessary
const gameAddr = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);
await game.giveMeAllowance(30000);
await game.mint(20000);
    // do whatever you need to do to win the game here:
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
