function University(props) {
    const school = " Gachon";
    return <>{school}</>;
}
function Student() {
    return (
        <>
            <h1>
                I Am a
                <University />
            </h1>
        </>
    );
}
export default Student;
