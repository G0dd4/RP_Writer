import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../models/character-card.model";
import { environment } from "src/environments/environment";


@Injectable()
export class CharacterInfoService{
    
    constructor(private http:HttpClient){}
    
    getCharacters(): Observable<Character[]>{
        return this.http.get<Character[]>(`${environment.apiUrl}/CharacterInfo`);
    }
    getCharacterById(id:string): Observable<Character>{
        return this.http.get<Character>(`${environment.apiUrl}/CharacterInfo/${id}`);
    }
    postCharacter(character:Character): Observable<Character>{
        return this.http.post<Character>(`${environment.apiUrl}/CharacterInfo`,character);
    }
    updateCharacter(id:string, character:Character): Observable<Character>{
        return this.http.put<Character>(`${environment.apiUrl}/CharacterInfo/${id}`,character);
    }
    deleteCharacter(id:string): Observable<Character>{
        return this.http.delete<Character>(`${environment.apiUrl}/CharacterInfo/${id}`);
    }
}