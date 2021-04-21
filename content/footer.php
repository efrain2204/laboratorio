<!-- script -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>

<!-- Javascript zone -->
<script src="js/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/dat.gui.min.js"></script>

<!-- scripts de sesiones -->
<?php if ($sesion == "s1") { ?>
  <script src="js/sesion01.js"></script>

<?php  } elseif ($sesion == "s2") {  ?>
  <script src="js/sesion02.js"></script>

<?php } elseif ($sesion == "s3") { ?>
  <script src="js/sesion03.js"></script>

<?php } elseif ($sesion == "s4") { ?>
  <script src="js/sesion04.js"></script>
<?php } ?>
<script>
  function openNav() {
    document.getElementById("sideNavigation").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("controls").style.marginLeft = "200px";
  }

  function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("controls").style.marginLeft = "0";
  }
</script>
</body>

</html>