const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function callback(err, data) {
        console.log(data);
    }

    callbackFunction(callback);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    let p = promiseFunction();
    p.then(function(beta){
        console.log(beta);
    });
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    let p = promiseFunction();
    const beta = await p;
    console.log(beta);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function callback (err){
        throw err;
    }
    callbackFunctionError(callback);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    let p = promiseFunctionError();
    return p.catch(function (err) {
        throw err;
    });
}

/**
 * throw error come from promiseFunctionError using async/await
 */

async function handleAsyncAwaitError() {    
    let p = promiseFunctionError();
    try {
        const t = await p;
    } catch(e) {
        throw e;
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
