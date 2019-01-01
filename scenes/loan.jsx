import React from "react";
import { addFlag, addScenes } from "web-text-adventure";
import { RainbowCircleText } from "../styles.jsx";

addFlag("loanMoney", -4313);
addFlag("loanTurns", 31);
addFlag("loanBills1", [false,false,false]);
addFlag("loanBills2", [false,false]);
addFlag("loanGroceries", [false,false,false,false,false,false,false])
addFlag("loanBills3", [false,false,false,false,false]);
addFlag("loanIPhone", false);
addFlag("loanWindows", false);
addFlag("loanWindowsSoldOut", false);
addFlag("loan_visitedStore", false);

const displayMoney = (num) => {
    if(num < 0) return "-$" + (-num);
    return "$" + num;
};

const LoanHeader = () => <div>
    <p className={"loan-header " + (loanTurns < 10 ? "loan-header-low" : "")}>
        Money: <strong>{displayMoney(loanMoney)}</strong>. You have <strong>{loanTurns}</strong> turns left to pay it off.
    </p>
</div>;

const decreaseTurn = () => loanTurns--;

function checkAllBought(array)  {
    for(i = 0; i < array.length; i++) {
        if(!array[i]) {
            return false;
        }
    }
    return true;
}

addScenes({
    loan_start: {
        prompt: <div>
            You somehow got a loan of $4313, and now have to pay it off within 30 turns. Now this is going to be tricky!
        </div>,
        options: [
            { text: "Begin", to: "loan_main" }
        ],
        contributor: "Dave"
    },
    loan_main: {
        prompt: () => <div>
            <LoanHeader />
            <div>
                You are outside the hospital, and you are free of your peanut allergy. <strong>What do you do?</strong>
            </div>
        </div>,
        options: [
            { text: "Pay your bills", to: "loan_paybills" },
            { text: "Invest in some BitCoin", to: "loan_bitcoin" },
            { text: "Invest in some something else", to: "" },
        ],
        action: decreaseTurn,
        contributor: "Dave and Hunter"
    },
    loan_paybills: {
        prompt: () => <div>
            <LoanHeader />
            <div>
                You decide to pay your bills{(loanBills1[0] && loanBills1[1] && loanBills1[2]) ? ", and go even further into debt." : "..."}
            </div>
        </div>,
        options: [
            {
                text: "Pay Electric Bill (-$100)",
                disabledText: "(Purchased)",
                to: "loan_paybills",
                if: () => !loanBills1[0],
                action: () => {
                    loanBills1[0] = true;
                    loanMoney -= 100;
                }
            },
            {
                text: "Pay Gas Bill (-$60)",
                disabledText: "(Purchased)",
                to: "loan_paybills",
                if: () => !loanBills1[1],
                action: () => {
                    loanBills1[1] = true;
                    loanMoney -= 100;
                }
            },
            {
                text: "Pay Water Bill (-$28)",
                disabledText: "(Purchased)",
                to: "loan_paybills",
                if: () => !loanBills1[2],
                action: () => {
                    loanBills1[2] = true;
                    loanMoney -= 28;
                }
            },
            {
                text: "Pay Rent (-$2000)",
                to: "loan_paybills2",
                if: () => loanBills1[0] && loanBills1[1] && loanBills1[2],
                action: () => {
                    loanMoney -= 2000;
                }
            },
        ],
        action: decreaseTurn,
        contributor: "Hunter"
    },
    loan_paybills2: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                It really seems like you could use a new car
            </p>
        </div>,
        options: [
            { text: "Buy Car (-$17,000)", to: "loan_paybills3", action: () => loanMoney-=17000 }
        ],
        action: decreaseTurn,
        contributor: "Dave"
    },
    loan_paybills3: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                ...and maybe a new house would be nice...
            </p>
        </div>,
        options: [
            { text: "Buy a new house (-$319,679)", disabledText: true, to: "loan_paybills3", if: () => loanMoney > -30000, action: () => loanMoney -= 319679 },
            { text: "Pay Shipping (-$0.99)", to: "loan_paybills4", if: () => loanMoney < -30000, action: () => loanMoney -= .99 },
        ],
        action: decreaseTurn,
        contributor: "Hunter"
    },
    loan_paybills4: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                ...and maybe a new house would be nice...
            </p>
        </div>,
        options: [
            { text: "Buy a new house (-$319,679)", disabledText: true, to: "", if: () => false },
            { text: "Pay Shipping (-$0.99)", disabledText: true, to: "", if: () => false },
            { text: "Pay Handling (-$0.98)", to: "loan_paybills5", action: () => loanMoney -= .98 },
        ],
        action: decreaseTurn,
        contributor: "Hunter"
    },
    loan_paybills5: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                Hey, it looks like its also on sale! Buy one, get another half off!
            </p>
        </div>,
        options: [
            { text: "Buy another house (-$159,839)", to: "loan_paybills6", action: () => loanMoney -= 156839 },
        ],
        action: decreaseTurn,
        contributor: "Hunter"
    },
    loan_paybills6: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                Hey, it looks like its also on sale! Buy one, get another half off!
            </p>
        </div>,
        options: [
            { text: "Buy another house (-$159,839)", to: "", disabledText: true, if: () => false },
            { text: "Pay More Shipping (-$0.50)", to: "loan_paybills7", action: () => loanMoney-=0.50},
            // { text: "Pay Handling (-$0.45)", to: "loan_paybills5", action: () => loanMoney -= 98 },
        ],
        action: decreaseTurn,
        contributor: "Hunter"
    },
    loan_paybills7: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                Hey, it looks like its also on sale! Buy one, get another half off!
            </p>
        </div>,
        options: [
            { text: "Buy another house (-$159,839)", to: "", disabledText: true, if: () => false },
            { text: "Pay More Shipping (-$0.50)", to: "", disabledText: true, if: () => false },
            { text: "Pay More Handling (-$0.45)", to: "loan_paybills_house", action: () => loanMoney -= 98 },
        ],
        action: decreaseTurn,
        contributor: "Hunter"
    },
    loan_paybills_house: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                You are now at your amazing new house, and realize how ugly it is.
            </p>
        </div>,
        options: [
            { text: "Repaint the walls (-$500)", disabledText: "Repaint the walls (Purchased)", to: "loan_paybills_house", if: () => !loanBills2[0], action: () => { loanBills2[0] = true; loanMoney -= 500; } },
            { text: "Fix the wood floors (-$1700)", disabledText: "Fix the wood floors (Purchased)", to: "loan_paybills_house", if: () => !loanBills2[1], action: () => { loanBills2[1] = true; loanMoney -= 1700; } },
            { text: "Replace the windows (-$1500)", disabledText: "Replace the windows (Purchased)", to: "loan_paybills_windows", if: () => !loanWindows,action: () => loanMoney -= 1500 },
            { text: "Go buy groceries", disabledText: "Go buy groceries (Purchased)", to: "loan_paybills_groceries", if: ()=> !loan_visitedStore,action: () => loanMoney -= 500 },
            { text: "Buy an iPhone (-$4000)", disabledText: "Buy an iPhone (Purchased)", if: () => !loanIPhone, to: "loan_paybills_iphone", action: () => loanMoney -= 4000 },
        ],
        action: decreaseTurn,
        contributor: "many people"
    },
    loan_paybills_iphone: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                It looks like the <RainbowCircleText string="iPhone XSR Max Plus Deluxe Pro" /> just came out, so you bought the first in stock.
            </p>
        </div>,
        options: [
            { text: "Buy the headphone jack adapter (-$10)", to: "loan_paybills_iphone", if: () => !loanBills3[0], action: () => { loanMoney -= 10; loanBills3[0] = true; } },
            { text: "Buy the charger (-$55)", to: "loan_paybills_iphone", if: () => !loanBills3[1], action: () => { loanMoney -= 55; loanBills3[1] = true; } },
            { text: "Buy the charger brick (-$60)", to: "loan_paybills_iphone", if: () => !loanBills3[2] && loanBills3[1], action: () => { loanMoney -= 60; loanBills3[2] = true; } },
            { text: "Buy the new AirPods (-$235)", to: "loan_paybills_iphone", if: () => !loanBills3[3] && loanBills3[0], action: () => { loanMoney -= 235; loanBills3[3] = true; } },
            { text: "Sell the useless headphone jack adapter (+$2)", to: "loan_paybills_iphone", if: () => !loanBills3[4] && loanBills3[0] && loanBills3[3], action: () => { loanMoney += 2; loanBills3[4] = true; } },
            "seperator",
            { text: () => "Leave Apple Store", disabledText: true, to: "loan_paybills_house", if: () => loanBills3.reduce((x, y) => x && y, true) },
        ],
        action: () => {
            loanIPhone = true;
            decreaseTurn();
        },
        contributor: "Dave"
    },
    loan_paybills_groceries: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                {
                    loanGroceries.reduce((x, y) => x && y, true) 
                        ? <span>
                            You have <a href="">taken the entire stock</a> of the store.
                        </span>
                        : <span>
                            You enter the grocery store, and you decide to buy everything inside the shop, as your
                            new house is currently empty.
                        </span>
                }
            </p>
        </div>,
        options: [
            { text: "Buy all the Eggs (-$5543)", disabledText: "Buy all the Eggs (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 5543; loanGroceries[0] = true; } , if: () => !loanGroceries[0] },
            { text: "Buy all the Salad (-$4234)", disabledText: "Buy all the Salad (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 4234; loanGroceries[1] = true; }, if: () => !loanGroceries[1] },
            { text: "Buy all the Cookies (-$2445)", disabledText: "Buy all the Cookies (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 2445; loanGroceries[2] = true; }, if: () => !loanGroceries[2] },
            { text: "Buy all the Candy (-$23585)", disabledText: "Buy all the Candy (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 23585; loanGroceries[3] = true; }, if: () => !loanGroceries[3] },
            { text: "Buy all the Poptarts (-$854)", disabledText: "Buy all the Poptarts (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 854; loanGroceries[4] = true; }, if: () => !loanGroceries[4] },
            { text: "Buy all the Milk (-$482)", disabledText: "Buy all the Milk (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 482; loanGroceries[5] = true; }, if: () => !loanGroceries[5] },
            { text: "Buy all the Dog Toys (-$1)", disabledText: "Buy all the Dog Toys (Purchased)", to: "loan_paybills_groceries", action: () => { loanMoney -= 1; loanGroceries[6] = true; }, if: () => !loanGroceries[6] },
            "seperator",
            { text: "Leave", disabledText: true, to: "loan_paybills_house", if: () => loanGroceries.reduce((x,y) => x&&y, true) },
            
        ],
        action: () => {
            loan_visitedStore = true;
            decreaseTurn();
        },
        contributor: "Hunter",
    },
    loan_paybills_windows: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                After replacing the windows on your house, you notice your neighbour has more windows than you. <strong>Do you buy more windows?</strong>
            </p>
        </div>,
        options: [
            { text: "Oh, hell yeah. (-$1500)", to: "loan_paybills_windows_buymore", action: () => loanMoney -= 1500 },
            { text: "No.", to: "loan_paybills_house" },
            { text: "Smash neighbour's windows.", to: "loan_paybills_smashwindow" },
        ],
        action: () => {
            loanWindows = true;
            decreaseTurn();
        }
    },
    loan_paybills_windows_buymore: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                You buy another set of windows...
            </p>
        </div>,
        options: [
            { text: "More Windows (-$1500)", to: "loan_paybills_windows_buymore2", action: () => loanMoney -= 1500 },
            { text: "Return Home", to: "loan_paybills_house" }
        ]
    },
    loan_paybills_windows_buymore2: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                You buy another set of windows... there is a shortage of windows so the price of windows has been marked up.
            </p>
        </div>,
        options: [
            { text: "More Windows (-$3500)", to: "loan_paybills_windows_buymore3", action: () => loanMoney -= 3500 },
            { text: "Return Home", to: "loan_paybills_house" }
        ],
        action: decreaseTurn
    },
    loan_paybills_windows_buymore3: {
        prompt: () => <div>
            <LoanHeader />
            <p>
                You buy another set of windows... the Window Store has run out of windows.
            </p>
        </div>,
        options: [
            { text: "Return Home", to: "loan_paybills_house" }
        ],
        action: () => {
            loanWindowsSoldOut = true;
            decreaseTurn();
        }
    }
});

// todo
/*

used on having the best house that you went a million dollars in debt - Dave

and then at the end of it all, all of your stuff gets stolen from you - SinkingSailor

*/