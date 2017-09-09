import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([[1, 2, 3]]);
    });

    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
  });

  it('should set todos to string', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from(['hello']);
    });

    component.ngOnInit();
    expect(typeof component.todos).toBe('string');
  });

  it('should call add method ', () => {
    const spy = spyOn(service, 'add').and.callFake(() => {
      return Observable.empty();
    });

    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo ', () => {
    const todo = {id: 1};
    const spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server throws error ', () => {
    const error = 'Server throws error';
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();
    expect(component.message).toBe(error);
  });

  it('should delete the item if user confirms it', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  it('should not delete the item if user cancels it', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
