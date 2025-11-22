class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
    claclulateAverage(){
        const total=this.marks.reduce((acc,curr)=>acc+curr,0);
        const avg=total/this.marks.length;
        return avg;
    }
    grade(){
        let avg=this.claclulateAverage();
        if(avg>90)
            return "A";
        else if(avg>80)
            return "B";
        else if(avg>70)
            return "c"
        else 
            return "F"; 
    }
}

const s1 = new Student("dabbu",[80,90,100,100]);
console.log(s1.grade());
const s2 = new Student("dabbu",[80,90,50,100]);
console.log(s2.grade());

const s3 = new Student("dabbu",[80,50,100,100]);
console.log(s3.grade());
