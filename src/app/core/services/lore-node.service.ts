import { DialogFormComponent } from './../../modules/glossary/dialog-form/dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { LoreNodeModel } from '@store/loreNode/loreNode.models';
import { addLoreNode, removeLoreNode, editLoreNodes } from '@store/loreNode/loreNode.actions';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoreNodeService {

  constructor(private store:Store, public dialog: MatDialog) { }

  openDialog(data? : LoreNodeModel) {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      disableClose : true,
      data: {
        data : data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  updateLoreNode = (data) => {
    let {node , formValue} = data;
    let loreNode : LoreNodeModel = Object.assign({}, node, formValue);

    this.store.dispatch(editLoreNodes({loreNode}));
  }

  createLoreNode = formData => {

    //ajouter la node au complet... pour mettre tout les data point pas juste le id
    const { formValue : {nodeId , nodeType, nodeKeyWords, nodeName, text, gallery, featuredImg, refIn, refOut}} = formData;
    // let loreNode = node ?
    let loreNode : LoreNodeModel = {
      nodeId : this.getNodeId(nodeId),
      createTime : new Date().getTime(),
      nodeType : this.getNodeType(nodeType),
      nodeKeyWords : this.getNodeKeyWords(nodeKeyWords),
      nodeName : this.getName(nodeName),
      text : this.getText(text),
      gallery : this.getGallery(gallery),
      featuredImg : this.getFeaturedImg(featuredImg),
      refIn : this.getRefIn(refIn),
      refOut : this.getRefOut(refOut),
      metaData : {
        color : "blue"
      }
    };

    this.store.dispatch(addLoreNode({loreNode}));
  }

  getNodeId = (item) => {
    if(!item){
      const nodeId = "node-id_" + Math.ceil(new Date().getTime() * Math.random());
      return nodeId;
    }
    return item;
  }
  getCreateTime = (item) => {
    if(!item){
      return new Date().getTime();
    }
    return item;
  }
  getNodeType = (item) => {
    return item;
  }
  getNodeKeyWords = (item) => {
    return [item];
  }
  getName = (item) => {
    return item;
  }
  getText = (item) => {
    return item;
  }
  getGallery = (item) => {
    return item;
  }
  getFeaturedImg = (item) => {
    return item;
  }
  getRefIn = (item) => {
    return item;
  }
  getRefOut = (item) => {
    return item;
  }

  removeLoreNode = (nodeId : string) : void => {
    this.store.dispatch(removeLoreNode({nodeId}));
  }

  getLoreNodesCollections(): Observable<Array<LoreNodeModel>> {
    // return this.http
    //   .get<{ items: LoreNode[] }>(
    //     'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
    //   )
    //   .pipe(map((loreNodes) => loreNodes.items || []));
    return of(LoreNodes)
  }
}

export const LoreNodes : LoreNodeModel[] = [
  {
    nodeId : "Ereser",
    createTime : 1624473715516,
    nodeType : "Personnage",
    nodeKeyWords : ["Hero", "chapitre 1", "Fighter", "Terwiligger"],
    nodeName : "Ereser",
    gallery : "",
    featuredImg : "ring1.png",
    refIn : ["woumbala"],
    refOut : [],
    text : "Fier mais inexpérimenté, Ereser tend à foncé tête baissé dans le danger. Malgré sa ligne de mire étroite, il apprend tranquillement à faire confiance à ses compagnons, particulièrement en Woumbala.",
    metaData : {
      color : "#ff99ff"
    }

  },
  {
    nodeId : "woumbala",
    createTime : 1624474063291,
    nodeType : "Personnage",
    nodeKeyWords : ["protagoniste", "chapitre 1", "Scout", "pitpit"],
    nodeName : "Woumbala",
    gallery : "",
    featuredImg : "",
    refIn : [],
    refOut : [],
    text : "Jeune et réservé, Woumbala est attiré malgré lui dans une chaine d'évenement qui déterminera le futur de son village. Amicale par nature, il se fera facilement, en chemin, plusieurs précieux compagnons pour l'aidé dans sa tâche.",
    metaData : {
      color : "#ff99ff"
    }

  },
  {
    nodeId : "magisa",
    createTime : 1624473715516,
    nodeType : "Personnage",
    nodeKeyWords : ["Protagoniste", "Muet", "Magie"],
    nodeName : "Magisa",
    gallery : "",
    featuredImg : "ring1.png",
    refIn : ["woumbala"],
    refOut : [],
    text : "Mystérieux petit automaton qui hante le rive nord du lac Nado. L'ancêtre semble avoir une histoire liée à ce dernier.",
    metaData : {
      color : "#ff99ff"
    }

  },
  {
    nodeId : "nakata",
    createTime : 1624474115036,
    nodeType : "Personnage",
    nodeKeyWords : ["village", "Hyka", "pitpit", "kokomoineau", "festival", "Woumbaka"],
    nodeName : "Nakata",
    gallery : "",
    featuredImg : "",
    refIn : [],
    refOut : [],
    text : "Une jeune fille pleine de fougue qui à tendance à entrainé Woumbala dans son sillage. Déterminé, elle ne se laissera pas arrête par quiconque.",
    metaData : {
      color : "#ff99ff"
    }

  },
  {
    nodeId : "woumba_nord",
    createTime : 1633752221041,
    nodeType : "Lieu",
    nodeKeyWords : ["Hyka", "humain"],
    nodeName : "Woumba-Nord",
    gallery : "",
    featuredImg : "",
    refIn : [],
    refOut : [],
    text : "Village difficile d'accès. Il comprend la seule population humaine connue à par Corande.",
    metaData : {
      color : "#ff99ff"
    }

  },
  {
    nodeId : "pierre_de_mana",
    createTime : 1624473715516,
    nodeType : "Objet",
    nodeKeyWords : ["Éther", "Magie"],
    nodeName : "Pierre de Mana",
    gallery : "",
    featuredImg : "ring1.png",
    refIn : [],
    refOut : [],
    text : "Une pierre spongieuse qui reluie d'une lueur bleuté dans l'obscurité. L'éther risiduelle de cet objet peut être absorbé afin que récupérer quelque force spirituelle.",
    metaData : {
      color : "#ff99ff"
    }

  },
];
