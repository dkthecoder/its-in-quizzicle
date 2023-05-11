function BoolQuiz() {
    return (
        <div class="container position-absolute top-50 start-50 translate-middle">


            <div class="card">
                <div class="card-body">
                    <p>This is the question text to be presented a card body.</p>

                    <div class="form-check form-check-inline form-check-reverse">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="true" value="option1">
                            <label class="form-check-label" for="true">True</label>
                    </div>
                    <div class="form-check form-check-inline form-check-reverse">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="false" value="option2">
                            <label class="form-check-label" for="false">False</label>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default BoolQuiz;