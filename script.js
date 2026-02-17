 // const insertbtn=document.querySelector(".insertbtn")
function insert_Row() {
 const table=document.querySelector("#sampleTable");
	const Row=table.insertRow(0);
	const cell1=Row.insertCell(0);
	const cell2=Row.insertCell(1);

	cell1.innerHTML="New Cell1";
	cell2.innerHTML="New Cell2"

	
  
  
}
// insert_Row();

