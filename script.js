// Copyright (C) 2024 Javier Castorena
// 
// This file is part of phoneNumberValidator.
// 
// phoneNumberValidator is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// phoneNumberValidator is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with phoneNumberValidator.  If not, see <https://www.gnu.org/licenses/>.

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.querySelector(".results-div");

checkBtn.addEventListener("click",()=> {
    const userInputValue = userInput.value;
    if(userInputValue.length === 0){
        alert("Please provide a phone number");
    }
    else if(evaluateRegex(userInputValue)){
        resultsDiv.innerText = "Valid US number: " + userInputValue;
    }
    else{
        resultsDiv.innerText = "Invalid US number: " + userInputValue;
    }
});

clearBtn.addEventListener("click",()=> {
    userInput.value = "";
    resultsDiv.innerText = "";
});

const evaluateRegex = (userInputValue) => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
                //  ---1--|

    return regex.test(userInputValue);
};


// /^1?([ \(]:?)\d{3}([\) -]:?)\d{3}([- ])?\d{4}$/;
//const regex = /^(1 :?)?([ ])?([\(]:?)?(\d{3})([- \)]?):?([ ]:?)?(\d{3})([- \)]?):?\d{4}$/;
//^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$