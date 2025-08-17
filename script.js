const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price");
	let total = 0;

	
    	prices.forEach((priceCell) => {
		total += parseInt(priceCell.textContent) || 0;
	});

	const oldAns = document.getElementById("ans");
	if (oldAns) oldAns.remove();



	const table = document.querySelector("table");
	const totalRow = document.createElement("tr");
	const totalCell = document.createElement("td");

	totalCell.setAttribute("colspan", "2");
	totalCell.style.textAlign = "center";
	totalCell.id = "ans";
	totalCell.textContent = total;

	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);

	
};

getSumBtn.addEventListener("click", getSum);

