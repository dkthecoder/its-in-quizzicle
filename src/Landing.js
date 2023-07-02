import './Landing.css';
import { Route, Routes } from "react-router-dom";

function Landing() {
  return (
    <div>

      <div class="container position-absolute top-50 start-50 translate-middle">
        <div class="container my-5 shadow-lg p-3 mb-5 bg-body rounded">
          <div class="p-5 text-center bg-body-tertiary rounded-3">
            <h1 class="text-body-emphasis">its-in-quizzicle</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted">
              This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
            </p>
          </div>

          <div class="row align-items-md-stretch">


            <div class="col-md-6">
              <div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center">

                <form>
                  <div class="mb-3">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Any" checked></input>
                      <label class="form-check-label" for="inlineCheckbox1">Any</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Easy"></input>
                      <label class="form-check-label" for="inlineCheckbox2">Easy</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Medium"></input>
                      <label class="form-check-label" for="inlineCheckbox3">Medium</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Hard"></input>
                      <label class="form-check-label" for="inlineCheckbox3">Hard</label>
                    </div>
                  </div>

                  <div class="mb-3">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                      <label class="form-check-label" for="inlineRadio1">True/False</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                      <label class="form-check-label" for="inlineRadio2">Multiple Choice</label>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="customRange3" class="form-label">Number of Questions</label>
                    <input type="range" class="form-range" min="1" max="50" step="1" id="customRange3"></input>
                  </div>

                  <div class="mb-3">
                    <select class="form-select" aria-label="Default select example">
                      <option value="any" selected>Any Category</option>
                      <option value="9">General Knowledge</option>
                      <option value="10">Entertainment: Books</option>
                      <option value="11">Entertainment: Film</option>
                      <option value="12">Entertainment: Music</option>
                      <option value="13">Entertainment: Musicals &amp; Theatres</option>
                      <option value="14">Entertainment: Television</option>
                      <option value="15">Entertainment: Video Games</option>
                      <option value="16">Entertainment: Board Games</option>
                      <option value="17">Science &amp; Nature</option>
                      <option value="18">Science: Computers</option>
                      <option value="19">Science: Mathematics</option>
                      <option value="20">Mythology</option>
                      <option value="21">Sports</option>
                      <option value="22">Geography</option>
                      <option value="23">History</option>
                      <option value="24">Politics</option>
                      <option value="25">Art</option>
                      <option value="26">Celebrities</option>
                      <option value="27">Animals</option>
                      <option value="28">Vehicles</option>
                      <option value="29">Entertainment: Comics</option>
                      <option value="30">Science: Gadgets</option>
                      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                      <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                  </div>


                  <button type="submit" class="btn btn-primary">Lets Go!</button>
                </form>

              </div>
            </div>


            <div class="col-md-6">
              <div class="h-100 p-5 bg-body-tertiary border rounded-3">

                <h2>Lets get started</h2>
                <p>Select your options on the otherside.</p>
                <ul>
                  <li>You've selected "CATAGORY" for hardness</li>
                  <li>You will be answering "QUESITON TYPE" questions</li>
                  <li>There will be "NUMBER" of questions</li>
                  <li>You've selected "CATAGORY" of questions</li>
                </ul>

              </div>
            </div>
          </div>

          <div class="p-5 text-center bg-body-tertiary rounded-3">

          </div>


        </div>
      </div>


    </div>

  );
}

export default Landing;
