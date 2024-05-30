import Fluent
import Vapor

final class Product: Model, Content {
    static let schema = "products"

    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String

    @Field(key: "price")
    var price: Float

    @Field(key: "description")
    private var _description: String

    var description: String {
        return _description
    }

    init() { }

    init(id: UUID? = nil, name: String, price: Float, description: String) {
        self.id = id
        self.name = name
        self.price = price
        self._description = description
    }

    func setDescription(_ description: String) {
        self._description = description
    }
}

extension Product {
    func toDTO() -> ProductDTO {
        return ProductDTO(id: self.id, name: self.name, price: self.price, description: self.description)
    }
}
