let groupList = [
    { name: "Дмитро", marks: [] },
    { name: "Едуард", marks: [] },
    { name: "Андрій", marks: [] },
    { name: "Владислав", marks: [] },
    { name: "Михайло", marks: [] },
    { name: "Андрій", marks: [] },
    { name: "Олександр", marks: [] },
    { name: "Василь", marks: [] },
    { name: "Володимир", marks: [] },
    { name: "Стефан", marks: [] },
    { name: "Назар", marks: [] },
    { name: "Олена", marks: [] },
    { name: "Станіслав", marks: [] },
    { name: "Денис", marks: [] },
    { name: "Василь", marks: [] },
    { name: "Олександра", marks: [] },
    { name: "Ігор", marks: [] },
    { name: "Василь", marks: [] },
    { name: "Володимир", marks: [] },
    { name: "Всеволод", marks: [] },
    { name: "Олександр", marks: [] },
    { name: "Євген", marks: [] },
    { name: "Денис", marks: [] },
    { name: "Марія", marks: [] },
];

function addMark(studentIndex, mark) {
    if (studentIndex >= 0 && studentIndex < groupList.length) {
        groupList[studentIndex].marks.push(mark);
        console.log(`Оцінка ${mark} додана для ${groupList[studentIndex].name}`);
    } else {
        console.log("Неправильний індекс учасника групи.");
    }
}

function showGroupList() {
    console.log("Список учасників групи:");
    groupList.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name}: ${student.marks.join(', ') || 'немає оцінок'}`);
    });
}

addMark(0, 5);
addMark(1, 4);
addMark(2, 3);

showGroupList();
