import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.scss']
})

export class CepFormComponent implements OnInit {

  cepInput: number;
  resultBox: any;
  cep: number;
  bairro: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
  boxHidden: boolean = true;
  erroHidden: boolean = true;
  erro: string;

  constructor(private http: HttpClient) { }

  get_cep() {
    const apiUrl: string = 'https://viacep.com.br/ws/' + this.cepInput + '/json/';
    this.http.get(apiUrl).subscribe((res) => {
      this.resultBox = res;
      this.cep = this.resultBox.cep;
      this.bairro = this.resultBox.bairro;
      this.complemento = this.resultBox.complemento;
      this.localidade = this.resultBox.localidade;
      this.logradouro = this.resultBox.logradouro;
      this.uf = this.resultBox.uf;
      this.boxHidden = false;
      this.erroHidden = true;
    },
    (error) => {
      this.erroHidden = false;
      this.boxHidden = true;
    });
  }

  ngOnInit() { }

}
