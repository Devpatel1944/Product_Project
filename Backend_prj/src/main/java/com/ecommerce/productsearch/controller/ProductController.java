package com.ecommerce.productsearch.controller;

import com.ecommerce.productsearch.model.Product;
import com.ecommerce.productsearch.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@Tag(name = "Product API", description = "APIs for product search and details")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    @Operation(summary = "Get all products or search products by name/brand")
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) String search) {
        return ResponseEntity.ok(productService.searchProducts(search));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get product details by ID")
    public ResponseEntity<Product> getProductById(@PathVariable UUID id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
} 