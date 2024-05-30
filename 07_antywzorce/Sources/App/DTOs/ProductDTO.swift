import Fluent
import Vapor

struct ProductDTO: Content {
    var id: UUID?
    var name: String?
    var price: Float?
    var description: String?

    func toModel() -> Product {
        let model = Product()
        model.name = name ?? ""
        model.price = price ?? 0.0
        model.setDescription(description ?? "")
        
        return model
    }
}
