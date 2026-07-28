import { Request, Response } from "express"
import { CreateCategoryDto, CustomError } from "../../domain"

export class CategoryController {

    constructor(){}

    private handleError = (error: unknown, res: Response) => {
        if( error instanceof CustomError ){
            return res.status(error.statusCode).json({error: error.message})
        }
           
        console.log(`${error}`)
        return res.status(500).json({error: 'Internal Server Error'})
    }

    createCategory = async(req: Request, res: Response) => {
        
        const [error, createCategory] = CreateCategoryDto.create( req.body );
        if( error ) return res.status(400).json({error})

        res.json(createCategory)
    }

    getCategories = async(req: Request, res: Response) => {
        res.json('Get Categories')
    }
    
}
