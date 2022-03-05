const main = async () => {
    const transactionFactory = await hre.ethers.getContractFactory('Transactions')
    const transactionContract = await transactionFactory.deploy()

    await transactionContract.deploy()

    console.log('Transaction deployed to:', transactionContract.address)
}

;(async () => {
    try{
        await main()
        process.exit(0)
    } catch(error) {
        console.error(error)
        process.exit(1)
    }
})()