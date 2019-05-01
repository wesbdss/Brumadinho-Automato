var c = document.getElementById("screen");
var ctx = c.getContext("2d");
//matriz[x*matrix+y]
var lamainfo = {	
	'tamanhoInicial': 36
};

var mapax = 25;//tamanho das linhas linhas
var mapay = 23;//tamanho das colunas
var mapa = [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 872, 872, 872,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 872, 872, 872,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 840, 836,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 830, 830,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 825, 825,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 819, 819,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 772,1000,1000,1000, 772,1000,1000,1000,1000,1000, 817,1000, 811,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 772,1000, 772,1000,1000,1000,1000,1000, 815, 815,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 772,1000,1000,1000,1000,1000,1000, 815, 815,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 775, 775,1000,1000,1000,1000,1000, 805, 805,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 775, 775, 773, 773,1000,1000,1000, 805, 805,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 767, 767,1000, 773, 773,1000,1000, 797, 797,1000,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 767, 767,1000,1000, 785, 785,1000, 797, 797,1000,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000, 763, 763,1000,1000,1000, 785, 785, 792, 792,1000,1000,1000,1000,1000,1000,
             730,1000,1000,1000,1000,1000,1000,1000,1000,1000, 763, 763,1000,1000,1000,1000,1000, 792, 792,1000,1000,1000,1000,1000,1000,
            1000, 731,1000,1000,1000,1000,1000,1000,1000, 761, 761,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000, 731,1000,1000,1000, 753, 753,1000, 761, 761,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000, 734,1000, 747, 747, 753, 753, 756, 756,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000, 733, 733, 747, 747,1000,1000, 756, 756,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
            1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];

var mapaLama = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,lamainfo.tamanhoInicial,lamainfo.tamanhoInicial,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,lamainfo.tamanhoInicial,lamainfo.tamanhoInicial,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//representação da localização da lama e sua altura/força


function gerarMapa(matrix,matriy,valuesAltura,valuesLama){ //tamanho da matriz x & tamanho da matriz y & valores
	var tamx=20, tamy=20;//tamanho do retangulo
	mat = [matrix*matriy];
	mat1 = [matrix*matriy];//matriz a ser executada
	mat = valuesAltura;//valores da matriz de terreno
	mat1 = valuesLama;
	if(mat.length != matrix*matriy){
		console.log("Valores Não Compatíveis com o tamanho da matrix");
		console.log("mat: "+mat);
		console.log("values: "+valuesAltura);
		return -1;
	}
	if(mat1.length != matrix*matriy){
		console.log("Valores Não Compatíveis com o tamanho da matrix");
		console.log("mat: "+mat1);
		console.log("values: "+valuesLama);
		return -1;
	}

	c.width = (tamx+1) * matrix;//quantidade de quadrados
	c.height = (tamy+1) * matriy;//quantidade de quadrados
	console.log("Valores: "+mat);
	var x=0,y=0;
	for (var i = 0; i < c.width; i=i+tamx+1) {
		for (var j = 0; j < c.height; j=j+tamy+1) {
			ctx.fillStyle = "#FF0000";
			if(mat[x*matrix+y] < 0) return -1;
			if(mat[x*matrix+y] <= 400) ctx.fillStyle ="#000202";
			else if(mat[x*matrix+y] <= 730) ctx.fillStyle ="#00686a";
			else if(mat[x*matrix+y] <= 732) ctx.fillStyle ="#00a3a3";
			else if(mat[x*matrix+y] <= 734) ctx.fillStyle ="#00d9d8";
			else if(mat[x*matrix+y] <= 737) ctx.fillStyle ="#00eac4";
			else if(mat[x*matrix+y] <= 741) ctx.fillStyle ="#00d482";
			else if(mat[x*matrix+y] <= 746) ctx.fillStyle ="#00e65b";
			else if(mat[x*matrix+y] <= 752) ctx.fillStyle ="#00ee2e";
			else if(mat[x*matrix+y] <= 760) ctx.fillStyle ="#02e21b";
			else if(mat[x*matrix+y] <= 770) ctx.fillStyle ="#46eb1c";
			else if(mat[x*matrix+y] <= 780) ctx.fillStyle ="#89fe1e";
			else if(mat[x*matrix+y] <= 793) ctx.fillStyle ="#c4fe1e";
			else if(mat[x*matrix+y] <= 807) ctx.fillStyle ="#fdfe1e";
			else if(mat[x*matrix+y] <= 822) ctx.fillStyle ="#fec315";
			else if(mat[x*matrix+y] <= 840) ctx.fillStyle ="#fe880c";
			else if(mat[x*matrix+y] <= 859) ctx.fillStyle ="#fe4d05";
			else if(mat[x*matrix+y] <= 880) ctx.fillStyle ="#fe1402";
			else if(mat[x*matrix+y] <= 903) ctx.fillStyle ="#fe0326";
			else if(mat[x*matrix+y] <= 928) ctx.fillStyle ="#fe0561";
			else if(mat[x*matrix+y] <= 955) ctx.fillStyle ="#fe099b";
			else if(mat[x*matrix+y] <= 985) ctx.fillStyle ="#ff0dd6";
			else if(mat[x*matrix+y] <= 1016) ctx.fillStyle ="#ff1cfd";
			else if(mat[x*matrix+y] <= 1050) ctx.fillStyle ="#ff50fd";
			else if(mat[x*matrix+y] <= 1086) ctx.fillStyle ="#ff89fd";
			else if(mat[x*matrix+y] <= 1124) ctx.fillStyle ="#ffc3fe";
			else if(mat[x*matrix+y] <= 1165) ctx.fillStyle ="#ffd9fe";
			else if(mat[x*matrix+y] >= 1165) ctx.fillStyle ="#fefefe";
			if(mat1[x*matrix+y] >= 1) ctx.fillStyle ="#8B4513";
			if(mat1[x*matrix+y] < 0) ctx.fillStyle ="#9f6200";

			//Falta os especiais, casas, a represa e a lama campos neutros
			ctx.fillRect(i, j, tamx, tamy);
			x++;
		}
		y++;
		x=0;
	}
}

function movLama(matrix,matriy,matrizMapa,matrizLama){
	var novoMapa = matrizLama.slice();
	var semocorrencias = true;
	var media = 0,qtd = 0;//calcular a media da força da prox onda de lama
	//arrumar o fato de que cada lama não possui seu próprio valor , talvez fazer a média ajude
	if(lamainfo.inicial <= 0){
		return -1;
	}else{
		//media da lama atual
		for (var i = 0; i < matrix; i++){
			for (var j = 0; j < matriy; j++){
				if(matrizLama[i*matrix+j] > 0){
					media = matrizLama[i*matrix+j]; qtd++;
					if(matrizLama[(i+1)*matrix+j] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[(i+1)*matrix+(j-1)] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[(i+1)*matrix+(j+1)] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[(i-1)*matrix+j] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[(i-1)*matrix+(j+1)] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[(i-1)*matrix+(j-1)] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[i*matrix+(j+1)] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					if(matrizLama[i*matrix+(j-1)] > 0){
						media = media + matrizLama[(i+1)*matrix+j];qtd++;
					}
					matrizLama[i*matrix+j] = media/qtd;
					media = 0;
					qtd = 0;
				}
			}
		}
		for (var i = 0; i < matrix; i++){
			for (var j = 0; j < matriy; j++){
				if(matrizLama[i*matrix+j] > 0){
					semocorrencias = false;
					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i+1)*matrix+(j)]){
						if (novoMapa[(i+1)*matrix+(j)] > 0){
							media = novoMapa[(i+1)*matrix+(j)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i+1)*matrix+(j)];
							novoMapa[(i+1)*matrix+(j)] = media/2;
						} else if(novoMapa[(i+1)*matrix+(j)] == 0) novoMapa[(i+1)*matrix+(j)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i+1)*matrix+(j)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i+1)*matrix+(j-1)]){
						if (novoMapa[(i+1)*matrix+(j-1)] > 0){
							media = novoMapa[(i+1)*matrix+(j-1)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i+1)*matrix+(j-1)];
							novoMapa[(i+1)*matrix+(j-1)] = media/2;
						} else if(novoMapa[(i+1)*matrix+(j-1)] == 0) novoMapa[(i+1)*matrix+(j-1)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i+1)*matrix+(j-1)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i+1)*matrix+(j+1)]){
						if (novoMapa[(i+1)*matrix+(j+1)] > 0){
							media = novoMapa[(i+1)*matrix+(j+1)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i+1)*matrix+(j+1)];
							novoMapa[(i+1)*matrix+(j+1)] = media/2;
						} else if(novoMapa[(i+1)*matrix+(j+1)] == 0) novoMapa[(i+1)*matrix+(j+1)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i+1)*matrix+(j+1)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i-1)*matrix+(j)]){
						if (novoMapa[(i-1)*matrix+(j)] > 0){
							media = novoMapa[(i-1)*matrix+(j)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i-1)*matrix+(j)];
							novoMapa[(i-1)*matrix+(j)] = media/2;
						} else if(novoMapa[(i-1)*matrix+(j)] == 0) novoMapa[(i-1)*matrix+(j)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i-1)*matrix+(j)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i-1)*matrix+(j+1)]){
						if (novoMapa[(i-1)*matrix+(j+1)] > 0){
							media = novoMapa[(i-1)*matrix+(j+1)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i-1)*matrix+(j+1)];
							novoMapa[(i-1)*matrix+(j+1)] = media/2;
						} else if(novoMapa[(i-1)*matrix+(j+1)] == 0) novoMapa[(i-1)*matrix+(j+1)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i-1)*matrix+(j+1)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i-1)*matrix+(j-1)]){
						if (novoMapa[(i-1)*matrix+(j-1)] > 0){
							media = novoMapa[(i-1)*matrix+(j-1)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i-1)*matrix+(j-1)];
							novoMapa[(i-1)*matrix+(j-1)] = media/2;
						} else if(novoMapa[(i-1)*matrix+(j-1)] == 0) novoMapa[(i-1)*matrix+(j-1)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i-1)*matrix+(j-1)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i)*matrix+(j-1)]){
						if (novoMapa[(i)*matrix+(j-1)] > 0){
							media = novoMapa[(i)*matrix+(j-1)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i)*matrix+(j-1)];
							novoMapa[(i)*matrix+(j-1)] = media/2;
						} else if(novoMapa[(i)*matrix+(j-1)] == 0) novoMapa[(i)*matrix+(j-1)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i)*matrix+(j-1)];	
					}

					if(matrizMapa[i*matrix+j] + matrizLama[i*matrix+j] > matrizMapa[(i)*matrix+(j+1)]){
						if (novoMapa[(i)*matrix+(j+1)] > 0){
							media = novoMapa[(i)*matrix+(j+1)] + (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i)*matrix+(j+1)];
							novoMapa[(i)*matrix+(j+1)] = media/2;
						} else if(novoMapa[(i)*matrix+(j+1)] == 0) novoMapa[(i)*matrix+(j+1)] = (matrizMapa[i*matrix+j] + matrizLama[i*matrix+j]) - matrizMapa[(i)*matrix+(j+1)];	
					}
					
					novoMapa[i*matrix+j] = -1;
				}

			}
		}
	}
	if(semocorrencias) alert("A lama não se move mais!! ");
	return novoMapa;
}

var nextmapa;
function Main(){
	if(gerarMapa(mapax,mapay,mapa,mapaLama) == -1){
		return -1;
	}
	var informes = document.getElementById("informes");
	informes.innerHTML = "<strong>Informes</strong>" + "</br>Intensidade da Lama: "+lamainfo.tamanhoInicial+"";
	informes.innerHTML = informes.innerHTML+ "</br>";
	nextmapa = mapaLama;
	for(var i=0; i<mapay; i++)
	{
	    for(var j=0; j<mapax; j++)
	    {
	        informes.innerHTML = informes.innerHTML + nextmapa[i*mapax+j]+ "  ";
	        //document.getElementById("("+i+","+j+")").className = "";
	        

	    }
	    informes.innerHTML=informes.innerHTML+"</br>";
	}
}

function proximo(){
	nextmapa = movLama(mapax,mapay,mapa,nextmapa);
	if(gerarMapa(mapax,mapay,mapa,nextmapa) == -1){
		alert("Ocorreu um erro");
		return -1;
	}
	informes.innerHTML = "<strong>Informes</strong>" + "</br>Intensidade da Lama: "+lamainfo.tamanhoInicial+"";
	informes.innerHTML = informes.innerHTML+ "</br>";
	for(var i=0; i<mapay; i++)
	{
	    for(var j=0; j<mapax; j++)
	    {
	        informes.innerHTML = informes.innerHTML + nextmapa[i*mapax+j]+ "  ";
	        //document.getElementById("("+i+","+j+")").className = "";
	        

	    }
	    informes.innerHTML=informes.innerHTML+"</br>";
	}
}

Main();
