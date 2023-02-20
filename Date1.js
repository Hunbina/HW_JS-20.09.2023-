async function CurrentDate () {
    async function AwaitDate (){
        return new Promise((res) => {
            setTimeout(() => {
            console.log (new Date());
            res();
            }, 2000); 
        });
    }
    await AwaitDate();
}
  CurrentDate();