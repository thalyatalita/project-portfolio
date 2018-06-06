function validacao() {
	if (document.form.nome.value=="") {
		alert("Por favor, prenecha o campo nome.");
		document.form.nome.focus();
		return false;
	}
	if(document.form.nome.value.length < 3) {
		alert("O Campo nome no minímo 3 caracteres.");
		document.form.nome.focus();
		return false;
	}
	if(document.form.endereco.value=="") {
		alert("Por favor, preencha o Campo Endereço.");
		document.form.endereco.focus();
		return false;
	}
	if(document.form.cidade.value=="") {
		alert("Por favor, preencha o Campo Cidade.");
		document.form.cidade.focus();
		return false;
	}
	if(document.form.cep.value=="") {
		alert("Por favor, preencha o Campo CEP.");
		document.form.cep.focus();
		return false;
	}
	if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
		alert("Por favor, digite um endereço de e-mail válido.");
		document.form.email.focus();
		return false;
	}
	if(document.form.telefone.value==""){
		alert("Por favor, preencha o Campo Telefone.");
		document.form.telefone.focus();
		return false;
	}
	if (document.form.telefone.value.length < 7) {
		alert("O Campo telefone no minimo 7 caracteres.");
		document.form.telefone.focus();
		return false;

	}
}