function msgAfterTimeout2(msg: string, who: string, timeout: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello  ${who}!`), timeout);
    });
}

async function example() {
    try {
        const firstMsg = await msgAfterTimeout2("something", "Foo", 2000);
        const secondMsg = await msgAfterTimeout2(firstMsg, "Bar", 2000);
        const finalMsg = `${secondMsg} - Done after 2000ms`;
        console.log(finalMsg);
    } 
    catch(err){
    console.log(err);
        
    }
    finally {
        console.log('This is always executed');
    }
}

example();

/*
ES2017 added the async and await keywords
Syntactic sugar for promises
You can await any function that returns a promise

*/