let students =[];
function addData()
{
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    if (name == "" || age == "" || course == "")
    {
        alert("Please enter all details!");
        return;
    }
    students.push({
        Name: name,
        Age: age,
        Course: course
    });
    alert("Data Added Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}
function exportExcel()
    {
       if (students.length == 0){
        alert("Please add some data first!");
        return;
       }
       let worksheet = XLSX.utils.json_to_sheet(students);
       let workbook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(workbook,worksheet,"students");
       XLSX.writeFile(workbook,"Student_Data.xlsx");
    }
