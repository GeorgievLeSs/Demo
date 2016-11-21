

<section id="form">

    <div class="container">

        <form class="row" method="post" id="simplePHP"  enctype="multipart/form-data">

            <?php

              include('php/phpForm.php');
            ?>
                <button type="button" name="simple_php" id="simplePHPBtn" class="col-xs-6 col-xs-offset-3 btnSendForm styleButton">

                  Get started now
                </button>
          </form>

          <form class="row"  method="post" id="codePHP"  enctype="multipart/form-data">

              <?php

                  include('php/formCode.php');
              ?>
                  <button type="button" name="code_php" id="codePHPBtn" class="col-xs-6 col-xs-offset-3 btnSendForm styleButton">

                    Get started now
                  </button>
        </form>
    </div>
</section>
