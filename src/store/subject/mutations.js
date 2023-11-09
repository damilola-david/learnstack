export default{
    loadSubject(state,route){
        const selectedSubject = route.params.subjectName;
        const pickedSubject = state.subjects.find ((subject) => subject.Subjectname === selectedSubject);
        state.selectedName = pickedSubject.subjectName;
        console.log(route)
    }
}