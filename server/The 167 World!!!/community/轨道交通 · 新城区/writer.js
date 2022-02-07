document.getElementById("se_167_c_g_a_p1_writer_info_card1").style.display = "none";
document.getElementById("se_167_c_g_a_p1_writer_info_card2").style.display = "none";
document.getElementById("se_167_c_g_a_p1_writer1").addEventListener("mouseenter", c1_1);
document.getElementById("se_167_c_g_a_p1_writer1").addEventListener("mouseleave", c1_2);
document.getElementById("se_167_c_g_a_p1_writer2").addEventListener("mouseenter", c2_1);
document.getElementById("se_167_c_g_a_p1_writer2").addEventListener("mouseleave", c2_2);

function c1_1() {
    document.getElementById("se_167_c_g_a_p1_writer_info_card2").style.display = "none";
    document.getElementById("se_167_c_g_a_p1_writer_info_card1").style.display = "inline-block";
}
function c1_2() {
    document.getElementById("se_167_c_g_a_p1_writer_info_card1").style.display = "none";
}
function c2_1() {
    document.getElementById("se_167_c_g_a_p1_writer_info_card1").style.display = "none";
    document.getElementById("se_167_c_g_a_p1_writer_info_card2").style.display = "inline-block";
}
function c2_2() {
    document.getElementById("se_167_c_g_a_p1_writer_info_card2").style.display = "none";
}