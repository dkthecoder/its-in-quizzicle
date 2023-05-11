function MultiQuiz() {
    return (
        <div class="container position-absolute top-50 start-50 translate-middle">


            <div class="card">
                <div class="card-body">
                    <p>This is the question text to be presented a card body.</p>
                    <div class="form-check form-check-inline form-check-reverse">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="answerOne" value="answerOne">
                            <label class="form-check-label" for="answerOne">True</label>
                    </div>
                    <div class="form-check form-check-inline form-check-reverse">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="answerTwo" value="answerTwo">
                            <label class="form-check-label" for="answerTwo">False</label>
                    </div>
                    <div class="form-check form-check-inline form-check-reverse">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="answerThree" value="answerThree">
                            <label class="form-check-label" for="answerThree">True</label>
                    </div>
                    <div class="form-check form-check-inline form-check-reverse">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="answerFour" value="answerFour">
                            <label class="form-check-label" for="answerFour">False</label>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default MultiQuiz;