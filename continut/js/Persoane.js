function incarcaPersoane() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var xml = this.responseXML;
            var persoane = xml.getElementsByTagName("persoana");

            var tabel = "<table border='1' style='border-collapse:collapse; width:100%; margin-top:20px;'>";
            tabel += "<tr style='background-color:#1a6b2e; color:white;'>";
            tabel += "<th>ID</th><th>Nume</th><th>Prenume</th><th>Vârstă</th>";
            tabel += "<th>Experiență</th><th>Educație</th><th>Limbi străine</th>";
            tabel += "<th>Competențe digitale</th><th>Info suplimentare</th>";
            tabel += "<th>Adresă</th>";
            tabel += "</tr>";

            for (var i = 0; i < persoane.length; i++) {
                var p = persoane[i];
                var id = p.getAttribute("id");
                var nume = p.getElementsByTagName("nume")[0].textContent;
                var prenume = p.getElementsByTagName("prenume")[0].textContent;
                var varsta = p.getElementsByTagName("varsta")[0].textContent;
                var exp = p.getElementsByTagName("experienta_profesionala")[0].textContent;
                var edu = p.getElementsByTagName("Educatie")[0].textContent;
                var limbi = p.getElementsByTagName("Limbi_straine")[0].textContent;
                var comp = p.getElementsByTagName("Competente_digitale")[0].textContent;
                var info = p.getElementsByTagName("Info_suplimentare")[0].textContent;
                var strada = p.getElementsByTagName("strada")[0].textContent;
                var numar = p.getElementsByTagName("numar")[0].textContent;
                var localitate = p.getElementsByTagName("localitate")[0].textContent;
                var judet = p.getElementsByTagName("judet")[0].textContent;
                var tara = p.getElementsByTagName("tara")[0].textContent;
                var adresa = strada + " " + numar + ", " + localitate + ", " + judet + ", " + tara;

                tabel += "<tr>";
                tabel += "<td>" + id + "</td>";
                tabel += "<td>" + nume + "</td>";
                tabel += "<td>" + prenume + "</td>";
                tabel += "<td>" + varsta + "</td>";
                tabel += "<td>" + exp + "</td>";
                tabel += "<td>" + edu + "</td>";
                tabel += "<td>" + limbi + "</td>";
                tabel += "<td>" + comp + "</td>";
                tabel += "<td>" + info + "</td>";
                tabel += "<td>" + adresa + "</td>";
                tabel += "</tr>";
            }

            tabel += "</table>";

            document.getElementById("continut").innerHTML = "<h2>Lista persoane</h2>" + tabel;
        }
    };
    xhr.open("GET", "resurse/persoane.xml", true);
    xhr.send();
}