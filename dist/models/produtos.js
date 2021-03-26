"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _subgrupoProdutos = _interopRequireDefault(require("./subgrupoProdutos"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
let Produtos = (_dec = (0, _typeorm.Entity)('produtos'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.Column)('decimal'), _dec11 = Reflect.metadata("design:type", Number), _dec12 = (0, _typeorm.Column)('decimal'), _dec13 = Reflect.metadata("design:type", Number), _dec14 = (0, _typeorm.Column)('decimal'), _dec15 = Reflect.metadata("design:type", Number), _dec16 = (0, _typeorm.Column)(''), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.Column)('decimal'), _dec19 = Reflect.metadata("design:type", Number), _dec20 = (0, _typeorm.Column)(''), _dec21 = Reflect.metadata("design:type", String), _dec22 = (0, _typeorm.Column)(''), _dec23 = Reflect.metadata("design:type", String), _dec24 = (0, _typeorm.Column)('decimal'), _dec25 = Reflect.metadata("design:type", Number), _dec26 = (0, _typeorm.Column)(), _dec27 = Reflect.metadata("design:type", Number), _dec28 = (0, _typeorm.OneToOne)(() => _subgrupoProdutos.default), _dec29 = (0, _typeorm.JoinColumn)({
  name: 'produidgrupo'
}), _dec30 = Reflect.metadata("design:type", typeof _subgrupoProdutos.default === "undefined" ? Object : _subgrupoProdutos.default), _dec31 = (0, _typeorm.CreateDateColumn)(), _dec32 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec33 = (0, _typeorm.UpdateDateColumn)(), _dec34 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class Produtos {
  constructor() {
    _initializerDefineProperty(this, "produid", _descriptor, this);

    _initializerDefineProperty(this, "producodigo", _descriptor2, this);

    _initializerDefineProperty(this, "produnome", _descriptor3, this);

    _initializerDefineProperty(this, "produimagem", _descriptor4, this);

    _initializerDefineProperty(this, "producusto", _descriptor5, this);

    _initializerDefineProperty(this, "produestoqueMin", _descriptor6, this);

    _initializerDefineProperty(this, "produestoqueMax", _descriptor7, this);

    _initializerDefineProperty(this, "produembalagem", _descriptor8, this);

    _initializerDefineProperty(this, "produquantidade", _descriptor9, this);

    _initializerDefineProperty(this, "produdescricao", _descriptor10, this);

    _initializerDefineProperty(this, "produdescricaoGeral", _descriptor11, this);

    _initializerDefineProperty(this, "produvalorvenda", _descriptor12, this);

    _initializerDefineProperty(this, "produidgrupo", _descriptor13, this);

    _initializerDefineProperty(this, "grupo", _descriptor14, this);

    _initializerDefineProperty(this, "created_at", _descriptor15, this);

    _initializerDefineProperty(this, "updated_at", _descriptor16, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "produid", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "producodigo", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "produnome", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "produimagem", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "producusto", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "produestoqueMin", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "produestoqueMax", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "produembalagem", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "produquantidade", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "produdescricao", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "produdescricaoGeral", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "produvalorvenda", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "produidgrupo", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "grupo", [_dec28, _dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Produtos;
exports.default = _default;